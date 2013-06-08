angular.module('app', ['ui.compat' /* this is for ui-router */, 'demo' /* this essentially a self contained module that our app 'includes' */, 'ParseServices' /* this is the Parse SDK */, 'ExternalDataServices' /* this is where we define all our models and collections */, 'forms' /* an example directive */])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

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