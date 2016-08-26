var app = require('../index');
var db = app.get('db');

module.exports = {
  //getCustomerSr -
  //updateCmInfo
  //requestAppt
  //getCmAppts

  deleteCmAppt: function(req, res, next) {
    // console.log(req.params.id);
    db.delete_cm_appointment(req.params.id, function(err, response) {
      res.set(200).json("Appointment Deleted");
    });
  }
};
