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
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('landing', {
                url: '/',
                // controller: './app/controllers/userCtrl.js',
                templateUrl: 'assets/templates/landing.html',
                resolve: {

                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'assets/templates/login.html'
            })
            .state('cm-dashboard', {
                url: '/cm-dashboard',
                templateUrl: 'assets/templates/cm-dashboard.html',
                resolve: {

                    security: (mainServ, $state) => {

                      return mainServ.isAuthed()
                      .then(response => {
                        console.log(response);
                        if (response.data == "Not authorized") {
                            $state.go('login');
                              }
                          });

                        },

                }
            })

            // MAIN DASHBOARD AND SUBVIEWS

            .state('cm-dashboard.main', {
              url: '/main',
              templateUrl: 'assets/templates/cm-dashboard-main.html'

            })
                .state('cm-dashboard.main.claims', {
                  url: '/claims',
                  templateUrl: 'assets/templates/cm-dashboard-main.claims.html'
                })
                .state('cm-dashboard.main.appts', {
                  url: '/appointments',
                  templateUrl: 'assets/templates/cm-dashboard-main.appts.html'
                })

            // ACCOUNT DASHBOARD AND SUBVIEWS
            .state('cm-dashboard.account', {
              url: '/account',
              templateUrl: 'assets/templates/cm-dashboard-main.html'

            })
            .state('cm-home', {
                url: '/cm-home',
                templateUrl: 'assets/templates/cm-home.html',
                resolve: {
                    security: (mainServ, $state) => {

                            return mainServ.isAuthed()
                            .then(response => {
                              if (response.data == "Not authorized") {
                                        $state.go('login');
                                    }
                                });

                        },

                }
            })
            .state('my-account', {
              url: '/my-account',
              templateUrl: 'assets/templates/my-account.html',
              // resolve: {
              //   security: (mainServ, $state, $rootScope) => {
              //     // console.log(err);
              //     if (!$rootScope.testUser) {
              //       console.log('Hey! You dont exist!');
              //       $state.go('my-account.create');
              //     }
              //     else {
              //       console.log('You exist!');
              //       $state.go('my-account.info');
              //     }
              //   }
              // }
            })
              .state('my-account.info', {
                url: '/info',
                templateUrl: 'assets/templates/my-account.info.html',
                resolve: {
                  security: (mainServ, $state) => {
                    mainServ.isAuthed().then(response => {
                      if (response.data == "Not authorized") {
                        $state.go('my-account.new');
                      }
                    });
                  }
                }
              })
              .state('my-account.new', {
                url: '/new',
                templateUrl: 'assets/templates/my-account.create.html'

              })
            .state('tech-sched', {
                url: '/tech-sched',
                templateUrl: 'assets/templates/tech-sched.html',
                resolve: {
                    security:
                        (mainServ, $state) => {

                            return mainServ.isTech()
                            .then(response => {
                              if (response.data == "Not authorized") {
                                        $state.go('login');
                                    }
                                });

                        }
                },
            })
            .state('tech-home', {
                url: '/tech-home',
                templateUrl: 'assets/templates/tech-home.html',
                resolve: {
                    security:
                        (mainServ, $state) => {

                            return mainServ.isTech()
                            .then(response => {
                              if (response.data == "Not authorized") {
                                        $state.go('login');
                                    }
                                });

                        }

                }
            });
    });
