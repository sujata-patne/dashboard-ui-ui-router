'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectslistCtrl
 * @description
 * # ProjectslistCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectslistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
