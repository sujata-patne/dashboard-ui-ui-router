'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:OrganizationsviewCtrl
 * @description
 * # OrganizationsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('OrganizationsviewCtrl', function ($scope,$stateParams) {
    $scope.id = $stateParams.id;
    //console.log($stateParams.id);
    angular.forEach($scope.chartTitle, function(value,id) {
      angular.forEach(value, function(items, key){

        angular.forEach(items, function(item, index) {
          if($scope.id === index) {
            $scope.viewTitle = item;
            $scope.projectTitles = $scope.projectsList[id][key];
            //console.log($scope.projectTitles);
          }
        });
      });
    });
  });
