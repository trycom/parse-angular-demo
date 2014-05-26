angular.module('brandid.states.facebook', ['ParseServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo.facebook', {
        url: '/facebook',
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('demo.facebook.example', {
        url: '',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/facebook.example.html',
                controller: 'FacebookExampleController'
    		}

    	}
    })
	

}])