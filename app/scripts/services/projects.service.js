'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.projects.service
 * @description
 * # projects.service
 * Service in the dashboardApp.
 */
angular.module('dashboardApp')
  .service('projects.service', ['$http', function ($http) {
    var service = {};
    service.baseRestUrl = 'http://localhost:8888';

    service.getProjectList = function(success){
      $http.get(service.baseRestUrl+'/api/projects/').success(function (items) {
        success(items);
      });
    }
    service.add = function (newProject, success) {
      $http.post(service.baseRestUrl+'/api/projects/', newProject).success(function(items){
        success(items);
      });
    }
    service.delete = function (project, success) {
      $http.delete(service.baseRestUrl+'/api/projects/' + project._id, project).success(function (result) {
        success(result);
      });
    }
    service.update = function (newProject, success) {
      $http.put(service.baseRestUrl+'/api/projects/' + newProject._id, newProject).success(function(items){
        success(items);
      });
    }

    return service;
  }]);

