angular.module('demo', ['ui.compat', 'ParseServices', 'ExternalDataServices'])

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
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@demo.crud' : {
    			templateUrl: 'app/views/detail/crud.list.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@demo.crud' : {
    		// 	templateUrl: 'app/views/debug.html'
    		// }

    	}
    })

    .state('demo.crud.detail', {
    	url: 'crud/{monsterId}',
    	views: {
    		'panel@demo': {
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@demo.crud.detail' : {
    			templateUrl: 'app/views/detail/crud.detail.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@demo.crud.detail' : {
    		// 	templateUrl: 'app/views/tips/crud-tips.html'
    		// }

    	}
    })

    .state('demo.crud.detail.edit', {
        url: '/edit',
        views: {
            'panel@demo': {
                templateUrl: 'app/views/demo.html'  
            },
            'detail@demo.crud.detail.edit' : {
                templateUrl: 'app/views/detail/crud.detail.edit.html'
            }

            // this overrides ui-view="tip"
            // 'tip@demo.crud.detail.edit' : {
            //     templateUrl: 'app/views/tips/crud-tips.html'
            // }

        }
    })
	

}])