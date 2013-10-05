angular.module('demo')

.controller('DetailController', ['$rootScope', '$scope', '$state', '$stateParams', 'MonsterService', function($rootScope, $scope, $state, $stateParams, MonsterService) {
  
  $scope.detailCtrl = {
    current : null
  };

  // inherit the collection from the parent controller and find the current model
  // $scope.fetchMonstersPromise.then(function(col) {
    $scope.detailCtrl.current = $scope.masterDetailCtrl.collection.find(function(current) {
      return current.id == $stateParams.monsterId;
    })
  // })


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



}]);