'use strict';

describe('Service: projects.service', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var projects.service;
  beforeEach(inject(function (_projects.service_) {
    projects.service = _projects.service_;
  }));

  it('should do something', function () {
    expect(!!projects.service).toBe(true);
  });

});
