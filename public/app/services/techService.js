angular.module('app')
  .service('techService', techService);

  function techService($http) {
    this.getJobByInvoice = (invoice) => {
      // return {first_name: "Loda", last_name: "Berg", invoice: invoice, next_step: "Stop feeding and probably commit sudoku"};
      return $http({
        method: 'GET',
        url: '/jobs/' + invoice
      }).then(function(response) {
        // var results = JSON.parse(response);
        var resultsObj = response.data[0];
        console.log(resultsObj);
        return resultsObj;
      });
    };
    this.getAllCustomers = () => {
      return $http({
        method: 'GET',
        url: '/customers/all'
      }).then(function(response) {
        return response;
      });
    };
    this.getAllAppointments = () => {
      return $http({
        method: 'GET',
        url: '/appointments'
      }).then(function(response) {
        return response.data;
      });
    };
    this.getAllTechAppointments = id => {
      console.log(id);
      return $http({
        method: 'GET',
        url: '/api/tech/appointments/' + id
      }).then(response => {
        let unmetAppts = [];
        let appts = response.data;
        for (let i = 0; i < appts.length; i++) {
          appts[i].timeUntilAppt = moment(appts[i].appt_time).fromNow();
          appts[i].display_time = moment(appts[i].appt_time).format('MMMM Do YYYY, h:mm a');
          if(!appts[i].appt_phone) {
            appts[i].appt_phone = "No Number Provided";
          }
          if (!appts[i].appt_met) {
            unmetAppts.push(appts[i]);
          }
        }
        console.log(unmetAppts);
        return unmetAppts;
      });
    };
    this.updateJobAppt = updateData => {
      return $http({
        method: 'PUT',
        url: '/api/tech/appointments/update',
        data: updateData
      });
    };
    this.createNewManuf = dataObj => {
      return $http({
        method: 'POST',
        url: '/api/tech/manufacturers/create',
        data: dataObj
      });
    };
    this.getAllTechJobs = id => {
      return $http({
        method: 'GET',
        url: '/api/tech/jobs/' + id,
      });
    };
  }
