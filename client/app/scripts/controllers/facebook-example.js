angular.module('brandid.states.facebook')

.controller('FacebookExampleController', ['$rootScope', '$scope', '$state', '$stateParams', 'FacebookAngularPatch', function($rootScope, $scope, $state, $stateParams, FacebookAngularPatch) {
  	


  $scope.facebookCtrl = {
    fbAuthData : {},
    response : {}
  };

  if(Parse.User.current()) {
    $scope.facebookCtrl.fbAuthData = Parse.User.current().get('authData');
  }


  $scope.fbConnect = function() {

  	// NB: this is a contrived example for demo purposes, you would never write the following code in a real app

 	// normally you would define a User.js data module for all your user objects and the method below would be on the user, e.g. $rootScope.currentUser.fbConnect() 

  	Parse.FacebookUtils.logIn("user_likes", {}).then(function(user) {
  		alert('facebook connected!');

  		$scope.facebookCtrl.fbAuthData = user.get('authData');

  	}, function(error) {

  		alert('something went wrong, try again');

  		$scope.facebookCtrl.fbAuthData = error;
  		
  	});

  }

  $scope.exampleCall = function() {

  	FB.apiAngular(
  		'/me/apprequests',
  		{ message: 'From the app to the user.' },
  		'POST')

  	.then(function(data) {

  		alert('FB Request Successfully Sent!');

  		$scope.facebookCtrl.response = data;
  	
  	}, function(error) {

  		alert('FB Request Unsuccessful!');

		$scope.facebookCtrl.response = error;
	
	});

  }


}]);