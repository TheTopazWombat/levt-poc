'use strict';

angular.module('app').directive('siteHeader', siteHeader);

function siteHeader() {
  return {
    templateUrl: 'app/directives/site-header.html',
    // scope: $scope,
    controller: 'mainCtrl',
    link: function link(scope, element, attr) {
      $('.dashboard-link').on('click', function () {
        $('.primary-nav').fadeOut(700, function () {
          $('.primary-nav').hide(function () {
            $('.site-header').animate({ 'margin-left': '-65vw' }, 800);
          });
        });
      });

      $('#header-img-main').on('click', function () {
        $('.site-header').animate({ 'margin-left': '0px' }, 500, function () {
          $('.primary-nav').fadeIn(700);
        });
      });
    }

  };
}