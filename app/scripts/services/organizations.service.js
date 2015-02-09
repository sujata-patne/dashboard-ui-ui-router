/**
 * Created by sujatah on 2/3/2015.
 */
angular.module('dashboardApp')
  .service('OrganizationsService', ['$http', function ($http) {
    var service = {};
    service.baseRestUrl = 'http://localhost:8888';

    service.getOrganizationsList = function(success){
      $http.get(service.baseRestUrl+'/api/organizations/').success(function (items) {
        success(items);
      });
    }
    service.getOrganization = function (id, success) {
      $http.get(service.baseRestUrl+'/api/organizations/'+id).success(function (item) {
        success(item);
      });
    }
    service.delete = function (organization, success) {
      $http.delete(service.baseRestUrl+'/api/organizations/' + organization._id, organization).success(function (result) {
        success(result);
      });
    }
    service.update = function (newOrganization, success) {
      $http.put(service.baseRestUrl+'/api/organizations/' + newOrganization._id, newOrganization).success(function(items){
        success(items);
      });
    }
    service.add = function (newOrganization, success) {
      $http.post(service.baseRestUrl+'/api/organizations/', newOrganization).success(function(items){
        success(items);
      });
    }

    service.getObjectDataStr = function (objects) {
      var objectDataList = '';
      angular.forEach(objects, function(object) {
        objectDataList += object.name + ", ";
      });
      var pos = objectDataList.lastIndexOf(",");
      objectDataList = objectDataList.substr(0, pos);
      return objectDataList;
    }

    service.chartData = {
      "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      "series":['Series A', 'Series B','Series C', 'Series D'],
      "data":[
        [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
        [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
        [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
        [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
      ]
    }

    service.searchOwners = function (term) {
      return $http.get(service.baseRestUrl+'/api/organizations/owners/' + term)
    }

    service.searchProject = function (term) {
      return $http.get(service.baseRestUrl+'/api/organizations/projects/' + term)
    }


    //return service
    return service;
  }]);
