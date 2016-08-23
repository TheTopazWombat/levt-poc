angular.module('app')
    .controller('loginCtrl', loginCtrl);

function loginCtrl($scope, loginService, $rootScope, mainServ) {
  $scope.ThisAppIsBroken = "This App is working";
  $scope.select = () => {
    $scope.signinBoolean = !$scope.signinBoolean;
    $scope.signupBoolean = !$scope.signupBoolean;
  };
  $scope.getMyCmInfo = () => {
    loginService.getMyCmInfo().then((response) => {
      $rootScope.testUser = response[0];
      console.log($rootScope.testUser);
    });

  };

  // $scope.

  $scope.getMyCmInfo();



  //Active/Inactive button change

  $('.selector-button').click(function() {
    $(this).addClass('selected');
    $(this).removeClass('unselected');
    $('.selector-button').not($(this)).removeClass('selected');
    $('.selector-button').not($(this)).addClass('unselected');

  });

  //Sign in / Up Change Animations

  $('#sign-up').click(function() {
    $('.button-underline-half').animate({'margin-left': '50%'}, 300);
  });

  $('#sign-in').click(function() {
    $('.button-underline-half').animate({'margin-left': '0%'}, 300);
  });

}
