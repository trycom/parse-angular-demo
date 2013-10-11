angular.module('demo', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo', {
		abstract: true,
        views: {
            '@': {
                templateUrl: 'app/views/app-layout.html',
            },
            'panel@demo': {
                templateUrl: 'app/views/master-detail.html',
                controller: 'MasterDetailController',
                resolve: {
                    'monsters': ['MonsterService', function(MonsterService) {

                        // get the collection from our data definitions
                        var monsters = new MonsterService.collection;

                        // use the extended Parse SDK to load the whole collection
                        return monsters.load();

                    }]
                }

            }
        }
    })
    .state('demo.crud', {
    	url: '/',
    	views: {
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/crud.list.html'
    		}

    	}
    })

    .state('demo.crud.detail', {
    	url: 'crud/{monsterId}',
    	views: {
    		
    		'detail@demo' : {
    			templateUrl: 'app/views/detail/crud.detail.html',
                controller: 'DetailController'
    		}

    	}
    })

    .state('demo.crud.detail.edit', {
        url: '/edit',
        views: {
            'detail@demo' : {
                templateUrl: 'app/views/detail/crud.detail.edit.html',
                controller: 'DetailController'
            }

        }
    })


}])