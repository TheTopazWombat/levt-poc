'use strict';

angular.module('app').directive('siteHeader', siteHeader);

function siteHeader($rootScope) {
  return {
    templateUrl: 'app/directives/site-header.html',
    // scope: $scope,
    // controller: 'mainCtrl',
    link: function link(scope, element, attr) {
      $('.dashboard-link').on('click', function () {
        if ($rootScope.testUser || $rootScope.currentTech) {
          $('.primary-nav').fadeOut(700, function () {
            $('.primary-nav').hide(function () {
              $('.site-header').animate({ 'margin-left': '-75vw' }, 800);
            });
          });
        }
      });
      $('.tech-dashboard-link').on('click', function () {
        if ($rootScope.currentTech) {
          $('.primary-nav').fadeOut(700, function () {
            $('.primary-nav').hide(function () {
              $('.site-header').animate({ 'margin-left': '-75vw' }, 800);
            });
          });
        }
      });

      $('#header-img-main').on('click', function () {
        $('.site-header').animate({ 'margin-left': '0px' }, 500, function () {
          $('.primary-nav').fadeIn(700);
        });
      });
      //
      // $('.dashboard-link').click(function() {
      //   $('.portfolio_area').css("display", 'none');
      // });
      //
      // $('#header-img-main').click(function() {
      //   $('.portfolio_area').css("display", "block");
      // });
    }

  };
}