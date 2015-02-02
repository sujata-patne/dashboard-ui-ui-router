'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
