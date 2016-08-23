'use strict';

angular.module('app').controller('mainCtrl', mainCtrl);

function mainCtrl($scope, mainServ, $rootScope) {
  $scope.test = "Waddup";
  console.log($rootScope.testUser);

  $scope.getAllProducts = function () {
    mainServ.getAllProducts().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };
}