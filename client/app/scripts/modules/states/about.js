angular.module('brandid.states.about', ['brandid.states.demo','ParseServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo.about', {
		abstract: true,
        url: '/about'
    })
    .state('demo.about.list', {
    	url: '',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/about.list.html'
    		}

    	}
    })
    .state('demo.about.list.state', {
    	url: '/state',
    	views: {

    		'detail@demo' : {
    			templateUrl: 'app/views/detail/about.list.state.html'
    		}

    	}
    })
    .state('demo.about.list.animations', {
        url: '/animations',
        views: {

            'detail@demo' : {
                templateUrl: 'app/views/detail/about.list.animations.html'
            }

        }
    })

    .state('demo.about.list.theme', {
    	url: '/theme',
    	views: {

    		'detail@demo' : {
    			templateUrl: 'app/views/detail/about.list.theme.html'
    		}

    	}
    })

    .state('demo.about.list.bootstrap', {
    	url: '/bootstrap',
    	views: {

    		'detail@demo' : {
    			templateUrl: 'app/views/detail/about.list.bootstrap.html'
    		}

    	}
    })

    .state('demo.about.list.fontAwesome', {
    	url: '/font-awesome',
    	views: {

    		'detail@demo' : {
    			templateUrl: 'app/views/detail/about.list.font-awesome.html'
    		}

    	}
    })

	

}])