describe('apiService', function() {
  var $httpBackend;
  var apiService;

  // Initialize `app` module
  beforeEach(module('app'));

  // Mock `$httpBackend` requests and store locally with `apiService`
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.expectGET('/api/bower').respond({});
    $httpBackend.expectGET('/api/package').respond({});

    apiService = $injector.get('apiService');

    $httpBackend.flush();
  }));

  // Ensure expected requests were made
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // Test exposed properties for `apiService`
  it('should return { client: ..., server: ... }', function() {
    expect(apiService.client).toBeDefined();
    expect(apiService.server).toBeDefined();
  });
});
