'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.projects.service
 * @description
 * # projects.service
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('projects.service', [function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};
    service.projects = [];
    service.add = function (projectsData) {
      this.projects.push(projectsData);
    };
    service.delete = function (projectsData) {
      var index = this.projects.indexOf(projectsData);
      this.projects.splice(index, 1);
    };
    service.clear = function () {
      for (var index = this.projects.length - 1; index >= 0; index--) {
        if (this.projects[index].completed === true) {
          this.projects.splice(index, 1);
        }
      }
    };
    return service;
  }]);

