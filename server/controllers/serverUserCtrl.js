var app = require('../index');
var db = app.get('db');
var bcrypt = require('bcrypt');

module.exports = {
    createNewCustomer: function(req, res, next) {
        console.log(req.body);
        if (req.body) {
          db.create_new_customer()
        }
    },
    createNewTech: function(req, res, next) {
        console.log(req.body);
    },
    getMyCmInfo: function(req, res, next) {
        // console.log(req.user);
        db.get_my_cm_info([req.user._json.name.givenName, req.user._json.name.familyName], function(err, response) {
            if (response) {
                res.set(200).json(response);
            } else {
                res.set(401).json();
            }
            // next();
        });
    },
    getJobsByCmId: function(req, res, next) {
      console.log('req id', req.params.id);
      db.get_jobs_by_cm_id(req.params.id, function(err, response) {
        console.log(response);
        res.set(200).json(response);
      });
    },

    // loginTech: function(req, res, next) {
    //   db.get_tech
    // },
    isTech: function(req, res, next) {
      if (!req.user) {
          console.log('no user');
          res.set(200).json('Not authorized');
          return;
        }
        db.get_tech([req.user._json.name.givenName, req.user._json.name.familyName], function(err, response) {
            console.log('am I a tech?', response, req.user._json.name.givenName, req.user._json.name.familyName);
            if (response[0]) {
                res.set(200).json('tech');
                return;
            }
            else {
              res.set(200).json('Not authorized');

                return;
            }
        });
    },
    getUserType: function(req, res, next) {
        if (!req.user) {
            console.log('no user');
            res.set(200).json('Not authorized');
            return;
        }
        db.get_tech([req.user._json.name.givenName, req.user._json.name.familyName], function(err, response) {
          console.log(req.user._json);
            if (!response[0]) {
                db.get_my_cm_info([req.user._json.name.givenName, req.user._json.name.familyName], function(err, response) {
                    if (response[0]) {
                        res.set(200).json('customer');
                    } else {
                      console.log('shouldnt be down here');
                      res.set(200).json('Not authorized');
                    }
                });
            } else if (response[0]) {
                res.set(200).json();
            }
        });
        // console.log(req.user);
        // res.set(200).json('tech');
        // console.log(res.json);

    },
    createNewAppt: function(req, res, next) {
      db.create_new_appointment([req.body.appt_met, req.body.appt_phone, req.body.appt_time, req.body.cm_id, req.body.job_invoice, req.body.tech_id], function(err, response) {
        console.log('server says: ', err, response);
        // res.set(200).json('Appointment created');
        next();
      });
    },
    getAllCmAppointments: function(req, res, next) {
      if (req.params.id) {
      db.get_all_cm_appointments(req.params.id, function(err, response) {
        console.log('getting appts?', err, response);
        res.set(200).json(response);
      });
    }
    else if (req.body.cm_id) {
      db.get_all_cm_appointments(req.body.cm_id, function(err, response) {
        console.log('getting appts?', err, response);
        res.set(200).json(response);
      });
    }
  },
  updateJobInfoCm: function(req, res, next) {
    db.update_job_info_cm([req.body.model_num, req.body.serial_num, req.body.invoice], function(err, response) {
      console.log(err);
      res.set(200).json(response);
    });
  },
  createNewCmAccount: function(req, res, next) {
    var myCmId;
    db.create_new_customer([req.body.first_name, req.body.last_name, req.body.address, req.body.phone_num1, req.body.phone_num2], function(err, response) {
      console.log(err, response);

    });
    db.get_my_cm_info([req.body.first_name, req.body.last_name], function(err, response) {
      myCmId = response[0];
    });
    db.create_new_job([req.body.model_num, req.body.serial_num, req.body.invoice, myCmId], function(err, response) {
      console.log(err, response);
      res.set(200).json('Account successfully created');
    });
  },
  //THANKS STEVEN ILU <3
  addCM: (req, res, next) => {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        db.add_case_manager([req.body.name, req.body.department, req.body.contact_number, req.body.email, req.body.username, req.body.password, req.body.cm_image], (err, resp) => {
            if (err) {
                return res.status(500).json(err);
            } else {
                return res.status(200).send(true);
            }
        });
    },


 updateCM: (req, res, next) => {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        db.update_CM_information([req.body.name, req.body.department, req.body.contact_number, req.body.email, req.body.username, req.body.password, req.body.cm_image, req.params.id], (err, resp) => {
            if (err) {
                return res.status(500).json(err);
            } else {
                return res.status(200).json('Case Manager Updated!');
            }
        });
    },
  // createNewCmAccountReq: function(req, res, next) {
  //   console.log("got it",req.body);
  //   db.create_new_cm_account_req([req.body.first_name, req.body.last_name, req.body.address, req.body.invoice_number, req.body.phone_num1, req.body.phone_num2, req.body.model_num, req.body.serial_num], function(err, response) {
  //     console.log(err, response);
  //     res.set(200).json('Account request created, awaiting tech approval');
  //   });


  // }
};
