angular.module('app')
  .directive('siteHeader', siteHeader);

  function siteHeader() {
    return {
      templateUrl: 'app/directives/site-header.html',
      // scope: $scope,
      // controller: 'mainCtrl',
      link: function(scope, element, attr){
        $('.dashboard-link').on('click', () => {
          $('.primary-nav').fadeOut(700, () => {
            $('.primary-nav').hide(() => {
              $('.site-header').animate({'margin-left': '-65vw'}, 800);
            });
          });
        });



        $('#header-img-main').on('click', () => {
          $('.site-header').animate({'margin-left': '0px'}, 500, () => {
            $('.primary-nav').fadeIn(700);
          });
        });

      }

    };
  }
