angular.module('app')
  .controller('mainCtrl', mainCtrl);

  function mainCtrl($scope, mainServ, $rootScope) {
    $scope.test = "Waddup";
    console.log($rootScope.testUser);


    $scope.getAllProducts = function() {
      mainServ.getAllProducts()
        .then(function(response) {
          console.log(response);
          $scope.products = response;
        });
    };
    $scope.sociallinks = [
{
  name: 'facebook',
  id: 'fb',
  path: './assets/images/facebook.png',
  alt: 'facebook link'
},
{
  name: 'instagram',
  id: 'ig',
  path: './assets/images/instagram.png',
  alt: 'instagram link'
},
{
  name: 'twitter',
  id: 'tt',
  path: './assets/images/twitter.png',
  alt: 'twitter link'
},
{
  name: 'googleplus',
  id: 'gp',
  path: './assets/images/googleplus.png',
  alt: 'google plus link'
},
{
  name: 'linkedin',
  id: 'li',
  path: './assets/images/linkedin.png',
  alt: 'linked in link'
}];

  }
