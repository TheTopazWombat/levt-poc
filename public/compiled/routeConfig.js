'use strict';

angular.module('app')
// .run(function($rootScope, $state) {
//     // $rootScope.$on('$stateChangeError', (e, toState, toParams, fromState, fromParams, error) => {
//     //     $rootScope.requestedUrl = toState.name;
//     //     console.log(error);
//     //     if (error == "Not Authorized") {
//     //         console.log('not authorized');
//     //         $state.go($state.current.name);
//     //     } else if (error == "Not Logged In") {
//     //         console.log('not logged in');
//     //         $state.go('login');
//     //     }
//
//     });
// })
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/',
    // controller: './app/controllers/userCtrl.js',
    templateUrl: 'assets/templates/landing.html',
    resolve: {}
  }).state('login', {
    url: '/login',
    templateUrl: 'assets/templates/login.html'
  }).state('cm-dashboard', {
    url: '/cm-dashboard',
    templateUrl: 'assets/templates/cm-dashboard.html',
    resolve: {

      security: function security(mainServ, $state) {

        return mainServ.isAuthed().then(function (response) {
          console.log(response);
          if (response.data == "Not authorized") {
            $state.go('login');
          }
        });
      }

    }
  })

  // MAIN DASHBOARD AND SUBVIEWS

  .state('cm-dashboard.main', {
    url: '/main',
    templateUrl: 'assets/templates/cm-dashboard-main.html'

  }).state('cm-dashboard.main.claims', {
    url: '/claims',
    templateUrl: 'assets/templates/cm-dashboard-main.claims.html'
  }).state('cm-dashboard.main.appts', {
    url: '/appointments',
    templateUrl: 'assets/templates/cm-dashboard-main.appts.html'
  })

  // ACCOUNT DASHBOARD AND SUBVIEWS
  .state('cm-dashboard.main.account', {
    url: '/account',
    templateUrl: 'assets/templates/cm-dashboard-main.account.html'

  }).state('cm-home', {
    url: '/cm-home',
    templateUrl: 'assets/templates/cm-home.html',
    resolve: {
      security: function security(mainServ, $state) {

        return mainServ.isAuthed().then(function (response) {
          if (response.data == "Not authorized") {
            $state.go('login');
          }
        });
      }

    }
  }).state('my-account', {
    url: '/my-account',
    templateUrl: 'assets/templates/my-account.html'
  }).state('my-account.info', {
    url: '/info',
    templateUrl: 'assets/templates/my-account.info.html',
    resolve: {
      security: function security(mainServ, $state) {
        mainServ.isAuthed().then(function (response) {
          if (response.data == "Not authorized") {
            $state.go('my-account.new');
          }
        });
      }
    }
  }).state('my-account.new', {
    url: '/new',
    templateUrl: 'assets/templates/my-account.create.html',
    resolve: {
      helloNewPerson: function helloNewPerson() {
        ngDialog.open({
          templateUrl: 'assets/templates/modals/new-account-greeting.html'
        });
      }
    }

  }).state('tech-dashboard', {
    url: '/tech-dashboard',
    templateUrl: 'assets/templates/tech-views/tech-dashboard.html',
    resolve: {
      security: function security(mainServ, $state) {

        return mainServ.isTech().then(function (response) {
          if (response.data == "Not authorized") {
            $state.go('login');
          }
        });
      }
    }
  }).state('tech-dashboard.main', {
    url: '/tech-dashboard/main',
    templateUrl: 'assets/templates/tech-views/tech-dashboard.main.html'

  }).state('tech-home', {
    url: '/tech-home',
    templateUrl: 'assets/templates/tech-home.html',
    resolve: {
      security: function security(mainServ, $state) {

        return mainServ.isTech().then(function (response) {
          if (response.data == "Not authorized") {
            $state.go('login');
          }
        });
      }

    }
  });
});