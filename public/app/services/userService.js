angular.module('app')
  .service('userService', userService);

  function userService($http) {
    this.getUser = function(userId) {
      return $http({
        method: 'GET',
        url: ''
      });
    };

    this.requestNewAppt = function(apptObj) {
      return $http({
        method: 'POST',
        url: '/api/cm/requestappt',
        data: apptObj
      }).then(response => {
        console.log(response.data);
      });
    };

    this.getCmJobs = (id) => {
      return $http ({
        method: 'GET',
        url: '/api/cm/jobs/' + id
      }).then((response) => {
        console.log('service response', response.data);
        return response.data;
      });
    };
    this.getAllCmAppointments = (id) => {
      return $http({
        method: 'GET',
        url: '/api/cm/appointments/' + id
      });
    };

    this.updateJobInfoCm = (data) => {
      return $http({
        method: 'PUT',
        url: '/api/cm/jobs/update',
        data: data
      });
    };
    this.createNewCmAccount = (data) => {
      return $http({
        method: 'POST',
        url: 'api/customers/accounts/new',
        data: data,
      });
    };
  }
