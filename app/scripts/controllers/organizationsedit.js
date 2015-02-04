'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationseditCtrl
 * @description
 * # OrganizationseditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationseditCtrl',['$scope', '$state', '$stateParams','OrganizationsService', function ($scope, $state, $stateParams, OrganizationsService) {

    $scope.organization = OrganizationsService.getOrganization($stateParams.id);
    //get last projectID
    $scope.projectIndex = $scope.organization.projects.length+1;
    /*Add New Project Field*/
    $scope.newProject = { name: [] };
    $scope.addProject = function() {
      $scope.newProject.name.push('');
    }

    $scope.deleteProjectField = function(index) {
      $scope.newProject.name.splice(index, 1);
    }

    $scope.deleteProject = function(id) {
      angular.forEach($scope.organization.projects, function(item,key){
        if(item.id == id){
          $scope.organization.projects.splice(key,1);
        }
      })
    }

    $scope.update=function(){
      angular.forEach($scope.newProject.name, function(item){
        var newProjectName = item;
        var newProjectId = ++$scope.projectIndex;
        $scope.organization.projects.push({"id":newProjectId,"name":newProjectName});
      })
      OrganizationsService.update($scope.organization);
      $state.transitionTo('organizations.view',{"id" : $scope.organization.id});
    };
  }]);
