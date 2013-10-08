angular.module('facebook', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo.facebook', {
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('demo.facebook.example', {
    	url: '/facebook',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/facebook.example.html',
                controller: 'FacebookExampleController'
    		}

    	}
    })
	

}])