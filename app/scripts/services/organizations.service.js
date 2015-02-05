/**
 * Created by sujatah on 2/3/2015.
 */
angular.module('dashboardApp')
  .service('OrganizationsService', ['$http', function ($http) {
    var service = {};
    service.baseRestUrl = 'http://localhost:8888';

    service.getOrganizationsList = function(success){
      $http.get(service.baseRestUrl+'/api/organizations/').success(function (items) {
         //console.log(items);
         //return items;
        success(items);
      });
    }


    service.add = function (organizationData) {
      this.organizations.push(organizationData);
    };
    service.delete = function (organizationData) {
      var index = this.organizations.indexOf(organizationData);
      this.organizations.splice(index, 1);
    };
    service.clear = function () {
      for (var index = this.organizations.length - 1; index >= 0; index--) {
        if (this.organizations[index].completed === true) {
          this.organizations.splice(index, 1);
        }
      }
    };

    service.getOrganization=function(id){
      var data = {};
      angular.forEach(this.organizations, function(items) {
        if(items.id == id ){
          data = items;
        }
      });
      return data;
    };

    service.getProjectsStr = function(id){
      var projects = this.getProjectsArr(id);
      var projectsList = '';
      angular.forEach(projects, function(project) {
        projectsList += project + ", ";
      });
      var pos = projectsList.lastIndexOf(",");
      projectsList = projectsList.substr(0, pos);
      return projectsList;
    }

    service.getProjectsArr = function(id){
      var projectsList = [];
      if(angular.isArray(this.organizations)) {
        angular.forEach(this.organizations, function (items) {
          console.log(items);
          if (items.id == id) {
            angular.forEach(items, function (item, key) {
              if (key == 'projects') {
                angular.forEach(item, function (project) {
                  projectsList.push(project.name);
                  console.log(project);
                });
              }
            });
          }
        });
      }else{
        if (items.id == id) {
          angular.forEach(items, function (item, key) {
            if (key == 'projects') {
              angular.forEach(item, function (project) {
                projectsList.push(project.name);
                console.log(project);
              });
            }
          });
        }
      }
      return projectsList;
    }

    service.update=function(newOrganization){
      var id = newOrganization.id;
      angular.forEach(this.organizations, function(items) {
        if(items.id == id){
          items.name = newOrganization.name;
          items.projects = newOrganization.projects;
          items.owners = newOrganization.owners;
        }
      });
    };

    //return service
    return service;
  }]);
