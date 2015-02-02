'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ProjectsviewCtrl
 * @description
 * # ProjectsviewCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ProjectsviewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
