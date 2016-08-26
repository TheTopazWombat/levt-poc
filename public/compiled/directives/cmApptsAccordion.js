'use strict';

angular.module('app').directive('cmApptsAccordion', cmApptsAccordion);

function cmApptsAccordion() {

  return {
    templateUrl: 'app/directives/cm-appts-accordion.html',

    link: function link(scope, element, attr) {
      $('#old-select').click(function () {

        setTimeout(function () {
          $('.mini-claim').animate({ opacity: '0' }, 300);
          $('.mini-claim').slideUp(500);
        }, 200);
      });

      $('#current-select').click(function () {
        setTimeout(function () {
          // $('.mini-claim').animate({'opacity': '1'}, 300);
          $('.mini-claim').slideDown(500).css({
            opacity: 1,
            transition: 'opacity .30s'
          });
        }, 200);
        setTimeout(function () {
          $('.old-claims-div').animate({ opacity: '0' });
        }, 500);
      });

      // *** Accordion switch ***

      $('.accordian-selector').click(function () {
        var flag = false;
        $(this).addClass('active');
        // $(this).removeClass('');
        $('.accordian-selector').not($(this)).removeClass('active');
      });
    }

  };
}