module.exports = {
  getCustomerById: function(req, res, next) {
    db.get_customer_by_id([req.params.id], function(err, customer) {
      console.log(err, customer);
      res.status(200).json(customer);
    });
  }
};
