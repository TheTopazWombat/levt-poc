'use strict';

angular.module('app').directive('missedJobDirective', missedJobDirective);

function missedJobDirective() {
  return {
    templateUrl: '/app/directives/missed-appt-job.html'
  };
}