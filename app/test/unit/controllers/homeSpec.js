describe('homeController', function() {
  var $scope;
  var homeController;

  // Initialize `app` module + mock `apiService`
  beforeEach(module('app', function($provide) {
    $provide.value('apiService', {
      server: { then: function() {} },
      client: { then: function() {} }
    });
  }));

  // Store `$scope` and `homeController` locally
  beforeEach(inject(function($injector) {
    var $controller = $injector.get('$controller');

    $scope = $injector.get('$rootScope').$new();

    homeController = $controller('homeController', {
      $scope: $scope
    });
  }));

  // Test `$scope` properties
  it('should set $scope.client & $scope.server', function() {
    expect($scope.client).toBeDefined();
    expect($scope.server).toBeDefined();
  });
});
