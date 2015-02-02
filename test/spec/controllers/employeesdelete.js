'use strict';

describe('Controller: EmployeesdeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var EmployeesdeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeesdeleteCtrl = $controller('EmployeesdeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
