'use strict';

describe('Filter: organizationsFilter', function () {

  // load the filter's module
  beforeEach(module('dashboardApp'));

  // initialize a new instance of the filter before each test
  var organizationsFilter;
  beforeEach(inject(function ($filter) {
    organizationsFilter = $filter('organizationsFilter');
  }));

  it('should return the input prefixed with "organizationsFilter filter:"', function () {
    var text = 'angularjs';
    expect(organizationsFilter(text)).toBe('organizationsFilter filter: ' + text);
  });

});
