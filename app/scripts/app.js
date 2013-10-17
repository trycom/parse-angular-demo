angular.module('app', ['ui.router.compat' /* this is for ui-router */, 'ngAnimate',  /* states */ 'features', 'facebook', 'demo' , 'about', 'ParseServices' /* this is the Parse SDK */, 'ExternalDataServices' /* this is where we define all our models and collections */, 'forms' /* an example directive */, 'FacebookPatch' /* our facebook angular wrapper so we can use FB.apiAngular instead of FB.api */])

// hack to disable auto scrolling on hashchange because we're using ui-router to manage states, instead of the core angular router which cannot handle states
// discussion on this here: https://github.com/angular-ui/ui-router/issues/110
.value('$anchorScroll', angular.noop)

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$anchorScrollProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $anchorScrollProvider) {


	// this is required for the root url to direct to /#/
	$urlRouterProvider
        .otherwise('/');
    
    $stateProvider
	
	.state('code', {
		url: '/code',
		controller:   'aboutController',
		templateUrl:  'app/views/about.html'
	});

}])

.run(['ParseSDK', 'ExtendParseSDK', '$rootScope', '$state', '$stateParams', function(ParseService, ExtendParseSDK, $rootScope,   $state,   $stateParams) {

	// Parse is initialised by injecting the ParseService into the Angular app
	$rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.isViewLoading = true;


    // loading animation
    $rootScope.setLoading = function() {
	    $rootScope.isViewLoading = true;
	};
	$rootScope.unsetLoading = function() {
	    $rootScope.isViewLoading = false;
	};


	$rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
		$rootScope.setLoading();
		console.log('state change start')

		// $rootScope.contentLoaded = false;
	})

	$rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
		$rootScope.unsetLoading();
		console.log('state change complete')
		console.log($rootScope.isViewLoading);
	});

}]);