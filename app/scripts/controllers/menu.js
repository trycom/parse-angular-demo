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
            icon: "icon-github",
    		href: "http://www.github.com/brandid/parse-angular-demo" 
    	}]
    }

    $scope.isActive = function(menuItem) {


    	if($state.current.name.indexOf(menuItem.state) >= 0) {
    		return "active";
    	}
    }

}])