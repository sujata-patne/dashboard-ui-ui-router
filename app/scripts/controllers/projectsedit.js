'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectseditCtrl
 * @description
 * # ProjectseditCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectseditCtrl', ['$scope','$stateParams', function ($scope,$stateParams) {
    $scope.id = $stateParams.id;
    angular.forEach($scope.chartTitle, function(value,id) {
      angular.forEach(value, function(items, key){
        angular.forEach(items, function(item, index) {
          if($scope.id === index) {
            $scope.title = item;
            $scope.projectTitles = $scope.projectsList[id][key];
            $scope.projectTitlesArr = $scope.projectTitles.split(',');
          }
        });
      });
    });
  }]);
