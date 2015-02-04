/**
 * Created by sujatah on 2/3/2015.
 */
angular.module('dashboardApp')
  .service('OrganizationsService', [function() {
    var service = {};

    service.organizations = [
        {
          "id":1,
          "name":"Synerzip",
          "owners":[
            {"id":1,"name":"Vinayak"},
            {"id":2,"name":"Hemant"}
          ],
          "projects":[
            {"id":1,"name":"Project1"},
            {"id":2,"name":"Project2"},
            {"id":3,"name":"Project3"},
            {"id":5,"name":"Project5"},
            {"id":6,"name":"Project6"}
          ],
          "total_num_people":20,
          "billable_headcount":16,
          "bench_strength":4,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        },
        {
          "id":2,
          "name":"BU1",
          "owners":{"id":1,"name":"Ashutosh"},
          "projects":[
            {"id":1,"name":"Project1"},
            {"id":2,"name":"Project2"}
          ],
          "total_num_people":10,
          "billable_headcount":8,
          "bench_strength":2,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        },
        {
          "id":3,
          "name":"BU2",
          "owners":{"id":1,"name":"Vrinda"},
          "projects":[
            {"id":3,"name":"Project3"}
          ],
          "total_num_people":10,
          "billable_headcount":7,
          "bench_strength":3,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        },
        {
          "id":4,
          "name":"BU5",
          "owners":{"id":1,"name":"Vinayak"},
          "projects":[
            {"id":4,"name":"Project4"}
          ],
          "total_num_people":20,
          "billable_headcount":16,
          "bench_strength":4,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        },
        {
          "id":5,
          "name":"BU3",
          "owners":{"id":1,"name":"Ashutosh"},
          "projects":[
            {"id":5,"name":"Project5"}
          ],
          "total_num_people":10,
          "billable_headcount":8,
          "bench_strength":2,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        },
        {
          "id":6,
          "name":"BU4",
          "owners":{"id":1,"name":"Vrinda"},
          "projects":[
            {"id":6,"name":"Project6"}
          ],
          "total_num_people":10,
          "billable_headcount":7,
          "bench_strength":3,
          "labels":["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
          "series":['Series A', 'Series B','Series C', 'Series D'],
          "data":[
            [65, 59, 25, 81, 56, 55,45, 59, 45, 31, 65, 48],
            [28, 48, 35, 19, 35, 27,65, 59, 25, 81, 56, 55],
            [45, 59, 45, 31, 65, 48,65, 59, 25, 81, 56, 55],
            [58, 48, 55, 92, 25, 35,28, 48, 35, 19, 35, 27]
          ]
        }
      ];

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
      angular.forEach(this.organizations, function(items) {
        if(items.id == id ){
          angular.forEach(items, function(item, key) {
            if(key == 'projects'){
              angular.forEach(item, function(project) {
                projectsList.push(project.name);
              });
            }
          });
        }
      });
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
