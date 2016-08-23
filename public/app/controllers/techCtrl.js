angular.module('app')
    .controller('techCtrl', techCtrl);

function techCtrl($scope, techService, $rootScope, mainServ, loginService, ngDialog) {
  console.log($rootScope.testUser);
    $scope.getJobByInvoice = (invoice, apptTime, apptMet, apptPhone, apptId) => {
        techService.getJobByInvoice(invoice)
            .then(response => {
                // console.log("More info:", response, apptTime, apptMet, apptPhone);
                $scope.customer = response;
                ngDialog.open({
                    template: './assets/templates/modals/more-info-job.html',
                    scope: $scope
                });
                $scope.customer.appt_time = moment(apptTime).format('MMMM Do YYYY, h:mm a');
                $scope.customer.appt_met = apptMet;
                if (apptPhone){
                  $scope.customer.appt_phone = apptPhone;
                }
                $scope.customer.appt_id = apptId;
                console.log("customer:", $scope.customer);

            });
    };
    $scope.getMyTechInfo = () => {
        loginService.getMyTechInfo().then((response) => {
            // $rootScope.testUser = response[0];
            // console.log('my tech info:', response);
            // response.data = $rootScope.currentTech;
            // console.log(response.data[0]);
            $rootScope.currentTech = response.data[0];
            // $scope.getCmJobs($rootScope.testUser.id);
            // console.log($rootScope.currentTech.tech_assigned);
            $scope.getAllTechAppointments($rootScope.currentTech.tech_assigned);
        });

    };
    $scope.getMyTechInfo();
    $scope.testCm = {
        first_name: "Takeshi",
        last_name: "Kovacs",
        invoice: 84611,
        phone_num1: "208-251-6641",
        phone_num2: "309-516-6634",
        next_step: "Get resleeved in Kamala Neurochem tech ninja sleeve, proceed to mess everyone up.",
        appt_time: moment("Mon Aug 15 2016 13:45:00 GMT-0600 (Mountain Daylight Time)").fromNow()
            // moment().subtract(1, 'days').calendar()
    };
    console.log($scope.testCm);
    // console.log(moment());
    $scope.getAllCustomers = () => {
        techService.getAllCustomers().then((response) => {
            // console.log(response);
            $scope.customers = response.data;
        });
    };
    // $scope.getAllCustomers();
    // $scope.storeTime = moment().tz('America/Boise');
    // $scope.pastAppts = [];
    $scope.currentAppts = [];
    $scope.getAllAppointments = () => {
      techService.getAllAppointments().then(function(response) {
        $scope.appointments = response;
        // console.log($scope.appointments);
        $scope.numOfAppts = $scope.appointments.length;

      });
    };
    $scope.pastAppts = [];
    $scope.todayAppts = [];
    $scope.futureAppts = [];
    $scope.getAllTechAppointments = (id) => {
      techService.getAllTechAppointments(id).then(response => {
        // console.log('we got a hit, biiiitch', response);
        let unmetAppts = [];
        let techAppointments = response;
        console.log(techAppointments);
        for (let i = 0; i < techAppointments.length; i++) {
          if (!techAppointments[i].isMet) {
            unmetAppts.push(techAppointments[i]);
          }
        }
        for (let i = 0; i < unmetAppts.length; i++) {
          if (moment(unmetAppts[i].appt_time).isBefore(moment())) {
            $scope.pastAppts.push(unmetAppts[i]);
          }
          else if (moment(unmetAppts[i].appt_time).isAfter(moment().endOf('day'))) {
            $scope.futureAppts.push(unmetAppts[i]);
          }
          else {
            $scope.todayAppts.push(unmetAppts[i]);
          }
        }
        if ($scope.pastAppts.length === 0) {
          $scope.missedApptsMessage = "No missed appointments! Yay!";
        }
        else {
          $scope.missedApptsMessage = "Oh no! You missed these appointments!";
        }

      });
      // console.log($scope.pastAppts, $scope.todayAppts, $scope.futureAppts);
    };
    // $scope.getAllTechAppointments();
    $scope.updateJobAppt = (apptMet, nextStep, modelNum, serialNum, status, cmId, apptId, jobInvoice) => {
      let updateData = {
        appt_met: apptMet,
        next_step: nextStep,
        model_num: modelNum,
        serial_num: serialNum,
        status: status,
        cm_id: cmId,
        appt_id: apptId,
        job_invoice: jobInvoice
      };
      console.log(updateData);
      techService.updateJobAppt(updateData).then(response =>{
        console.log(response);
        // $scope.getAllTechAppointments($rootScope.currentTech.tech_assigned);
      });
    };

    $scope.createNewManuf = (manuf_name, tech_assigned, phone_num, manuf_warranty, website, hours_of_op) => {
      let dataObj = {
        manuf_name: manuf_name,
        tech_assigned: tech_assigned,
        phone_num: phone_num,
        manuf_warranty: manuf_warranty,
        website: website,
        hours_of_op: hours_of_op
      };
      console.log(dataObj);
      techService.createNewManuf(dataObj).then(response => {
        console.log(response.data);
        console.log($scope.manuf_name);
        $scope.manuf_name = '';
        $scope.tech_assigned = '';
        $scope.phone_num = '';
        $scope.manuf_warranty = '';
        $scope.website = '';
        $scope.hours_of_op = '';
      });
    };

}
