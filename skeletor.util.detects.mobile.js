/**
 * @copyright   2016, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */


define(['jquery', 'skeletor.core', 'isMobile'],function($, Skeletor, isMobile){

	function DetectMobile(element, options) {
		DetectMobile.__super__.call(this, element, options, DetectMobile.DEFAULTS);
	}

	DetectMobile.VERSION = '2.0.0';
	DetectMobile.DEFAULTS =  {}

	Skeletor.Plugin.create(DetectMobile, {
		_init: function(element) {

			if(isMobile.any == true){
				$('body').addClass('isMobile')
			}

			if(isMobile.phone == true){
				$('body').addClass('isPhone')
			}

			if(isMobile.tablet == true){
				$('body').addClass('isTablet')
			}
		}
	});

	new DetectMobile()

});