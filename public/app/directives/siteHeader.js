angular.module('app')
  .directive('siteHeader', siteHeader);

  function siteHeader($rootScope) {
    return {
      templateUrl: 'app/directives/site-header.html',
      // scope: $scope,
      // controller: 'mainCtrl',
      link: function(scope, element, attr){
        $('.dashboard-link').on('click', () => {
          if ($rootScope.testUser || $rootScope.currentTech){$('.primary-nav').fadeOut(700, () => {
            $('.primary-nav').hide(() => {
              $('.site-header').animate({'margin-left': '-75vw'}, 800);
            });
          });}
        });
        $('.tech-dashboard-link').on('click', () => {
          if ( $rootScope.currentTech){$('.primary-nav').fadeOut(700, () => {
            $('.primary-nav').hide(() => {
              $('.site-header').animate({'margin-left': '-75vw'}, 800);
            });
          });}
        });



        $('#header-img-main').on('click', () => {
          $('.site-header').animate({'margin-left': '0px'}, 500, () => {
            $('.primary-nav').fadeIn(700);
          });
        });

      }

    };
  }
