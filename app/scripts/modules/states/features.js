angular.module('features', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('features', {
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('features.list', {
    	url: '/features',
    	views: {
    		'panel@features': {
    			templateUrl: 'app/views/demo.html',
                controller: 'MasterDetailController',
                resolve: {
                    'monsters': ['MonsterService', function(MonsterService) {

                        // get the collection from our data definitions
                        var monsters = new MonsterService.collection;

                        // use the extended Parse SDK to load the whole collection
                        return monsters.load();

                    }]
                }
    		},
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.html'
    		}

    	}
    })

    .state('features.list.facebook', {
    	url: '/facebook',
    	views: {
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.facebook.html'
    		}

    	}
    })

    .state('features.list.facebookSDK', {
        url: '/facebookSDK',
        views: {
            'detail@features.list' : {
                templateUrl: 'app/views/detail/features.list.facebookSDK.html'
            }

        }
    })

    .state('features.list.parse', {
    	url: '/parse',
    	views: {
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.parse.html'
    		}
    	}
    })

    .state('features.list.parseSDK', {
    	url: '/parse-sdk',
    	views: {
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.parse-sdk.html'
    		}
    	}
    })

    .state('features.list.data', {
    	url: '/data',
    	views: {
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.data.html'
    		}
    	}
    })
	

}])