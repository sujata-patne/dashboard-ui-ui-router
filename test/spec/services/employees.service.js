'use strict';

describe('Service: employees.service', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var employees.service;
  beforeEach(inject(function (_employees.service_) {
    employees.service = _employees.service_;
  }));

  it('should do something', function () {
    expect(!!employees.service).toBe(true);
  });

});
