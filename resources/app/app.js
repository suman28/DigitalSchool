

var app = angular.module('myApp', ['ngMaterial','ui.router','ngAnimate','routes.module','controllers.module','services.module','filters.module','directives.module']);


app.config(['$mdThemingProvider','$mdIconProvider','$stateProvider','$urlRouterProvider','$locationProvider', function($mdThemingProvider, $mdIconProvider,$stateProvider, $urlRouterProvider,$locationProvider) {

    //-------------------------------------CUSTOM THEME-----------------------------------------

	  //Extending Blue Palette
    //Getting the angular material blue theme and customize them -intead of creating new
	  var inboxBlue = $mdThemingProvider.extendPalette('blue', {'500': '3c80f6'});

	  //Defining Inbox Blue Palette
	  $mdThemingProvider.definePalette('inboxBlue', inboxBlue);


	  //Setting Application Theme
	  $mdThemingProvider.theme('default')
						  .primaryPalette('inboxBlue')
						  .accentPalette("pink")
						  .warnPalette("red");

    //-------------------------------------CUSTOM THEME-----------------------------------------


    //-------------------------------------ICON CONFIG-----------------------------------------
    $mdIconProvider
        .iconSet('action', '../resources/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../resources/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../resources/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../resources/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../resources/iconsets/content-icons.svg', 24)
        .iconSet('device', '../resources/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../resources/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../resources/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../resources/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../resources/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../resources/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../resources/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../resources/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../resources/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../resources/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../resources/iconsets/toggle-icons.svg', 24);

      //-------------------------------------ICON CONFIG-----------------------------------------

			// $locationProvider.html5Mode(true);

}]);
// app.filter('customCurrency',customCurrency);
