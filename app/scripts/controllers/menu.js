angular.module('app')


.controller('MenuController', ['$scope', '$state', function($scope, $state) {

	$scope.menuCtrl = {
    	menu: [{
    		name: "Parse Demo",
    		state: "demo",
            activeFor: ["demo","features","facebook","about"],
            icon: "icon-user",
    		href: "#/" 
    	},
    	{
    		name: "Code",
    		state: "code",
            activeFor: ["code"],
            icon: "icon-github",
    		href: "http://www.github.com/brandid/parse-angular-demo" 
    	}]
    }

    $scope.isActive = function(menuItem) {

        var parentstate = $state.current.name.split('.');
        parentstate = parentstate[0];
        
    	if(_.indexOf(menuItem.activeFor, parentstate) >= 0) {
    		return "active";
    	}
    }

}])