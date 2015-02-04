'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsviewCtrl
 * @description
 * # OrganizationsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsviewCtrl', ['$scope', '$stateParams','OrganizationsService', function ($scope, $stateParams, OrganizationsService) {

    //$scope.organizationsList = OrganizationsService.organizations;

    $scope.organization = OrganizationsService.getOrganization($stateParams.id);

    $scope.getProjectsStr = function(id){
      return OrganizationsService.getProjectsStr(id);
    }
  }]);
