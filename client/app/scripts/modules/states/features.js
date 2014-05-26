angular.module('brandid.states.features', ['brandid.states.demo', 'ParseServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo.features', {
		abstract: true,
        url: '/features'
    })
    .state('demo.features.list', {
        url: '',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/features.list.html'
    		}

    	}
    })

    .state('demo.features.list.facebook', {
    	url: '/facebook',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/features.list.facebook.html'
    		}

    	}
    })

    .state('demo.features.list.facebookSDK', {
        url: '/facebookSDK',
        views: {
            'detail@demo' : {
                templateUrl: 'app/views/detail/features.list.facebookSDK.html'
            }

        }
    })

    .state('demo.features.list.parse', {
    	url: '/parse',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/features.list.parse.html'
    		}
    	}
    })

    .state('demo.features.list.cloudCode', {
        url: '/cloud-code',
        views: {
            'detail@demo' : {
                templateUrl: 'app/views/detail/features.list.cloud-code.html'
            }
        }
    })

    .state('demo.features.list.parseSDK', {
    	url: '/parse-sdk',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/features.list.parse-sdk.html'
    		}
    	}
    })

    .state('demo.features.list.data', {
    	url: '/data',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/features.list.data.html'
    		}
    	}
    })
	

}])