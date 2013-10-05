angular.module('demo', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('demo', {
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('demo.crud', {
    	url: '/',
    	views: {
    		'panel@demo': {
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
    		'detail@demo.crud' : {
    			templateUrl: 'app/views/detail/crud.list.html'
    		}

    	}
    })

    .state('demo.crud.detail', {
    	url: 'crud/{monsterId}',
    	views: {
    		
    		'detail@demo.crud' : {
    			templateUrl: 'app/views/detail/crud.detail.html',
                controller: 'DetailController'
    		}

    	}
    })

    .state('demo.crud.detail.edit', {
        url: '/edit',
        views: {
            'detail@demo.crud' : {
                templateUrl: 'app/views/detail/crud.detail.edit.html',
                controller: 'DetailController'
            }

        }
    })
	

}])