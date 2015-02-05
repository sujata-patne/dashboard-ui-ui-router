'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationslistCtrl
 * @description
 * # OrganizationslistCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationslistCtrl',['$scope', '$stateParams','OrganizationsService', function ($scope, $stateParams, OrganizationsService) {

    //$scope.organizationsList = OrganizationsService.getOrganizationsList();
    OrganizationsService.getOrganizationsList(function (organizations) {
      $scope.organizationsList = organizations;
      //console.log($scope.organizationsList);
    });


    $scope.getProjectsStr = function(id){
      return OrganizationsService.getProjectsStr(id);
    }
  }]);
