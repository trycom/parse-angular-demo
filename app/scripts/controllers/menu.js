angular.module('app')


.controller('MenuController', ['$scope', '$state', function($scope, $state) {

	$scope.menuCtrl = {
    	menu: [{
    		name: "Parse Demo",
    		state: "demo",
            icon: "icon-user",
    		href: "#/" 
    	},
    	{
    		name: "Code",
    		state: "code",
            icon: "icon-info-sign",
    		href: "#/code" 
    	}]
    }

    $scope.isActive = function(menuItem) {


    	if($state.current.name.indexOf(menuItem.state) >= 0) {
    		return "active";
    	}
    }

}])