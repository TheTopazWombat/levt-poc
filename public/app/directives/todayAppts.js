angular.module('app')
  .directive('todayAppts', todayAppts);

  function todayAppts($scope) {
    return {
      templateUrl: './app/directives/today-appts.html',
      // scope: $scope,
      controller: 'techCtrl'

    };
  }
