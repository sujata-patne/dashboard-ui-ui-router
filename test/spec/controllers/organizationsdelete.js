'use strict';

describe('Controller: OrganizationsdeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var OrganizationsdeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizationsdeleteCtrl = $controller('OrganizationsdeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
