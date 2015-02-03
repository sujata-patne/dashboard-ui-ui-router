'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsviewCtrl
 * @description
 * # ProjectsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsviewCtrl',['$scope','$stateParams', function ($scope,$stateParams) {
    $scope.id = $stateParams.id;
    angular.forEach($scope.chartTitle, function(value,id) {
      angular.forEach(value, function(items, key){
        angular.forEach(items, function(item, index) {
          if($scope.id === index) {
            $scope.viewTitle = item;
            $scope.peopleTitle = $scope.peopleList[id][key];
            $scope.redDays = $scope.redDaysList[id][key];
            $scope.notes = $scope.notesList[id][key];
            $scope.openPosition = $scope.openPositions[id][key];
          }
        });
      });
    });
  }]);
