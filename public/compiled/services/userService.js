'use strict';

angular.module('app').service('userService', userService);

function userService($http) {
  this.getUser = function (userId) {
    return $http({
      method: 'GET',
      url: ''
    });
  };

  this.requestNewAppt = function (apptObj) {
    return $http({
      method: 'POST',
      url: '/api/cm/requestappt',
      data: apptObj
    }).then(function (response) {
      console.log(response.data);
    });
  };

  this.getCmJobs = function (id) {
    return $http({
      method: 'GET',
      url: '/api/cm/jobs/' + id
    }).then(function (response) {
      console.log('service response', response.data);
      return response.data;
    });
  };
  this.getAllCmAppointments = function (id) {
    return $http({
      method: 'GET',
      url: '/api/cm/appointments/' + id
    });
  };

  this.updateJobInfoCm = function (data) {
    return $http({
      method: 'PUT',
      url: '/api/cm/jobs/update',
      data: data
    });
  };
  this.createNewCmAccount = function (data) {
    return $http({
      method: 'POST',
      url: 'api/customers/accounts/new',
      data: data
    });
  };
}