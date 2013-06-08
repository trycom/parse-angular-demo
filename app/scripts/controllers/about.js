angular.module('app')

.controller('aboutController', ['$rootScope', '$scope', 'apiService', 'MonsterService', function($rootScope, $scope, api, MonsterService) {
  
  api.server.then(function(response) {
    $rootScope.version = response.data.version;
  });

  $scope.client = api.client;
  $scope.server = api.server;

  $scope.homeCtrl = {
    monster: null
  };


}]);