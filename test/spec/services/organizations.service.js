'use strict';

describe('Service: organizations.service', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var organizations.service;
  beforeEach(inject(function (_organizations.service_) {
    organizations.service = _organizations.service_;
  }));

  it('should do something', function () {
    expect(!!organizations.service).toBe(true);
  });

});
