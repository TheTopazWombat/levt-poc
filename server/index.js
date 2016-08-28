var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config.js');

var connectionString = config.connectionString;

var app = module.exports = express();


app.use(session({
    secret: config.sessionSecret
}));

app.use(passport.initialize());
app.use(passport.session());

var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

var massiveInstance = massive.connectSync({
    connectionString: connectionString
});


app.set('db', massiveInstance);

var db = app.get('db');

app.use(express.static(__dirname + '/../public'));

var techCtrl = require('./controllers/serverTechCtrl.js');
var userCtrl = require('./controllers/serverUserCtrl.js');
var cmCtrl = require('./controllers/serverCmCtrl.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// The function below is useless in the real world and a bad idea, this is used simply for functional demonstration purposes.

var isAuthenticated =  function(req, res, next) {
  if (req.user) {
    next();
  }
  else {
    res.set(403);
  }
};

passport.use(new GoogleStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // User.findOrCreate({
        //     googleId: profile.id
        // }, function(err, user) {
            return done(null, profile);
        // });
    }
));

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    function(req, res) {
      // userCtrl.loginCm(),
        res.redirect('/');
        // console.log(req.user);

    });



passport.serializeUser(function(user, done) {
  // console.log(user);
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

//LOGIN
app.post('/login/cm', isAuthenticated, userCtrl.getMyCmInfo);
app.get('/api/isAuthed', userCtrl.getUserType);
app.get('/api/isTech', userCtrl.isTech);
app.get('/api/cm/jobs/:id', userCtrl.getJobsByCmId);

//TECHS
app.get('/jobs/:invoice', techCtrl.getJobByInvoice);
app.get('/appointments', techCtrl.getAllAppointments);
app.get('/customers/all', techCtrl.getAllCustomers);
app.get('/api/tech/appointments/:id', techCtrl.getAllTechAppointments);
app.get('/api/tech', techCtrl.getTechInfo);
app.get('/api/tech/jobs/:id', techCtrl.getAllTechJobs);

app.put('/api/tech/appointments/update', techCtrl.updateTechAppointment);

app.post('/api/tech/manufacturers/create', techCtrl.createNewManuf);



//CUSTOMERS
app.get('/api/cm/appointments/:id', userCtrl.getAllCmAppointments);
app.post('/api/cm/requestappt', userCtrl.createNewAppt, userCtrl.getAllCmAppointments);
app.put('/api/cm/jobs/update', userCtrl.updateJobInfoCm);
// ***********************
// app.post('/api/customers/accounts/new', userCtrl.createNewCmAccountReq);
// ^^ THIS VERSION CREATES A CUSTOMER REQUEST, WILL IMPLEMENT IF I HAVE TIME AS THIS IS A MORE FORWARD-THINKING, FOOLPROOF SOLUTION. RIGHT NOW IT TAKES TOO MUCH FRONT END WORK TO BE EFFECTIVE
app.post('/api/customers/accounts/new', userCtrl.createNewCmAccount);

app.delete('/api/customers/appointments/delete/:id', cmCtrl.deleteCmAppt);




// app.post('/accounts/new', )

// app.get('/products', function(req, res, next) {
//   db.get_all_products(function(err, products) {
//     res.set(200).json(products);
//   });
// });




var port = config.port;
app.listen(port, function() {
    console.log('listening on ', port);
});
