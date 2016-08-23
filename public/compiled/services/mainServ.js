'use strict';

angular.module('app').service('mainServ', mainServ);

function mainServ($http, $q, $state, ngDialog) {
    this.getCustomerById = function (id) {
        return $http({
            method: 'GET',
            url: '/customers/' + id
        });
    };

    this.getAllProducts = function () {
        return $http({
            method: 'GET',
            url: '/products'
        }).then(function (response) {
            return response.data;
        });
    };
    this.isTech = function () {
        return $http.get('/api/isTech');
    };
    this.isAuthed = function () {
        // let deferred = $q.defer();
        return $http.get('/api/isAuthed');

        // .then(function(user) {
        //     let type = user.data;
        //     console.log(type);
        //     if (!type) {
        //         deferred.reject('Not Logged In');
        //     } else if (type == 'customer') {
        //         console.log('dont let me in');
        //         deferred.reject('Not Authorized');
        //     } else {
        //         deferred.resolve();
        //     }
        //     return deferred.promise;
        // });
    };

    this.redirect = function (state) {
        $state.go(state);
    };
    this.authErrorModal = function (mainCtrl) {
        console.log('Wondermodalpowers: Activate');
        ngDialog.open({
            template: '',
            controller: 'mainCtrl'
        });
    };
}