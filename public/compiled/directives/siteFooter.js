'use strict';

angular.module('app').directive('sitefooter', function () {

  return {
    restrict: 'AE',
    templateUrl: 'app/directives/sitefooter.html',
    controller: mainCtrl
  };
});