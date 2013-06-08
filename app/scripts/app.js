angular.module('app', ['ui.compat' /* this is for ui-router */,  /* states */ 'features', 'demo' , 'ParseServices' /* this is the Parse SDK */, 'ExternalDataServices' /* this is where we define all our models and collections */, 'forms' /* an example directive */])

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

}]);