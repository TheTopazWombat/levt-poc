angular.module('app')
  .service('loginService', loginService);

  function loginService($http) {
    this.getMyCmInfo = () => {
      return $http ({
        method: 'POST',
        url: '/login/cm'
      }).then((response) => {
        return response.data;
      });
    };
    // this.techLogin = () => {
    //   return $http ({
    //     method: 'POST',
    //     url: '/login/cm'
    //   }).then((response) => {
    //     return response.data;
    //   });
    // };
    this.authUser = (user) => {
      return $http({
        method: 'GET',
        url: `/api/auth/:$(user)`
      });
    };
    this.getMyTechInfo = () => {
      return $http({
        method: 'GET',
        url: '/api/tech'
      });
    };
  }
