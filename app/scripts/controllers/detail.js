angular.module('demo')

.controller('DetailController', ['$rootScope', '$scope', '$state', '$stateParams', 'MonsterService', function($rootScope, $scope, $state, $stateParams, CommentService) {
  
  $scope.detailCtrl = {
    current : null
  };

  // inherit the collection from the parent controller and find the current model
  $scope.fetchMonstersPromise.then(function(col) {
    $scope.detailCtrl.current = col.find(function(current) {
      return current.id == $stateParams.monsterId;
    })
  })
  
  

  



  $scope.transitionTo = function(state) {
    $state.transitionTo(state);
  }

  $scope.isActiveState = function(state) {

    if(state == $state.current.name) {
      return 'light-back';
    } else {
      return
    }
  }



  $scope.createComment = function() {


    // new up the model
    $scope.detailCtrl.collection.addComment('Joe', 'exploding feces').then(function() {

      console.log($scope.detailCtrl.collection.last)
      alert('OMG you created a monster with id: ' + $scope.detailCtrl.collection.last().id);

    });

  }


}]);