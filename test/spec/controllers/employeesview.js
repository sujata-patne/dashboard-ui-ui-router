'use strict';

describe('Controller: EmployeesviewCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var EmployeesviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeesviewCtrl = $controller('EmployeesviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
