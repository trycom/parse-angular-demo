angular.module('facebook', ['ParseServices', 'ExternalDataServices'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider

	.state('facebook', {
		abstract: true,
    	templateUrl: 'app/views/app-layout.html'
    })
    .state('facebook.example', {
    	url: '/facebook',
    	views: {
    		'panel@facebook': {
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
    		'detail@facebook.example' : {
    			templateUrl: 'app/views/detail/facebook.example.html',
                controller: 'FacebookExampleController'
    		}

    	}
    })
	

}])