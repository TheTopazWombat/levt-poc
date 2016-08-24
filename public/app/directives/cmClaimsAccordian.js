angular.module('app')
  .directive('cmClaimsAccordian', cmClaimsAccordian);

  function cmClaimsAccordian() {

    return {
      templateUrl: 'app/directives/cm-claims-accordian.html',
      // scope: $scope,
      controller: 'userCtrl',

      link: function(scope, element, attr) {
        $('#old-select').click(function() {

          setTimeout(function() {
            $('.mini-claim').animate({opacity: '0'}, 300);
            $('.mini-claim').slideUp(500);
          }, 200);
        });

        $('#current-select').click(function() {
          setTimeout(function() {
            // $('.mini-claim').animate({'opacity': '1'}, 300);
            $('.mini-claim').slideDown(500).css({
                opacity: 1,
                transition: 'opacity .30s'
            });
          }, 200);
          setTimeout(function() {
            $('.old-claims-div').animate({opacity: '0'});
          }, 500);
        });

        console.log('hi Isaac');


        // $('#work').click(function() {
        //   console.log('hi craig');
        //   $('.job-expand').animate({right: '200px'});
        // });



        // $('.mini-claim').click(function() {
        //   $(this).animate({
        //     "transform": "translate(50px,100px)",
        //     "transition": "transform 500ms"
        //   });
        // });


        $('.accordian-selector').click(function() {
          let flag = false;
          $(this).addClass('active');
          // $(this).removeClass('');
          $('.accordian-selector').not($(this)).removeClass('active');

          });


        }


      };
  }
