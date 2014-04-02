describe('Main Controller', function() {

  beforeEach(module('mlSeed'));

  it('should test model scope object', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new();
    var ctrl = $controller('MainCtrl', {
      $scope : scope
    });
    expect(scope.model).toBeDefined();
  }));

  // it('should properly provide a welcome message', inject(function(welcomeMessage) {
  //   expect(welcomeMessage()).toMatch(/welcome/i);
  // }));

});
