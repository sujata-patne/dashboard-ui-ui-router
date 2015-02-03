'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationseditCtrl
 * @description
 * # OrganizationseditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationseditCtrl',['$scope', '$stateParams','OrganizationsService', function ($scope, $stateParams, OrganizationsService) {

    $scope.organization = OrganizationsService.getOrganization($stateParams.id);

    $scope.getProjectsArr = function(id){
      return OrganizationsService.getProjectsArr(id);
    }
  }]);
