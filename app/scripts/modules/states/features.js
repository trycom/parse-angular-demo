angular.module('features', ['ui.compat', 'ParseServices', 'ExternalDataServices'])

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
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@features.list' : {
    			templateUrl: 'app/views/detail/features.list.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@features.list' : {
    		// 	templateUrl: 'app/views/debug.html'
    		// }

    	}
    })

    .state('features.list.facebook', {
    	url: '/facebook',
    	views: {
    		'panel@features': {
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@features.list.facebook' : {
    			templateUrl: 'app/views/detail/features.list.facebook.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@features.list.detail' : {
    		// 	templateUrl: 'app/views/tips/crud-tips.html'
    		// }

    	}
    })

    .state('features.list.parse', {
    	url: '/parse',
    	views: {
    		'panel@features': {
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@features.list.parse' : {
    			templateUrl: 'app/views/detail/features.list.parse.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@features.list.detail' : {
    		// 	templateUrl: 'app/views/tips/crud-tips.html'
    		// }

    	}
    })

    .state('features.list.parseSDK', {
    	url: '/parse-sdk',
    	views: {
    		'panel@features': {
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@features.list.parseSDK' : {
    			templateUrl: 'app/views/detail/features.list.parse-sdk.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@features.list.detail' : {
    		// 	templateUrl: 'app/views/tips/crud-tips.html'
    		// }

    	}
    })

    .state('features.list.data', {
    	url: '/data',
    	views: {
    		'panel@features': {
    			templateUrl: 'app/views/demo.html'	
    		},
    		'detail@features.list.data' : {
    			templateUrl: 'app/views/detail/features.list.data.html'
    		}

    		// this overrides ui-view="tip"
    		// 'tip@features.list.detail' : {
    		// 	templateUrl: 'app/views/tips/crud-tips.html'
    		// }

    	}
    })
	

}])