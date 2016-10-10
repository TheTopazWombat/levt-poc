'use strict';

angular.module('app').controller('loginCtrl', loginCtrl);

function loginCtrl($scope, loginService, $rootScope, mainServ) {
    $scope.ThisAppIsBroken = "This App is working";
    $scope.select = function () {
        $scope.signinBoolean = !$scope.signinBoolean;
    };
    $scope.getMyCmInfo = function () {
        loginService.getMyCmInfo().then(function (response) {
            $rootScope.testUser = response[0];
            console.log($rootScope.testUser);
        });
    };
    $scope.register = function (userInfo) {
        if ($scope.user.password !== $scope.user.confirmPassword) {
            //alert password don't match
            console.log('passwords do not match');
            return null;
        }
        if ($scope.user.email !== $scope.user.confirmEmail) {
            // show error box that says email does not match
            console.log('email does not match');
            return null;
        } else {
            var newUserInfo = {
                name: {
                    firstname: $scope.user.name.firstname,
                    lastname: $scope.user.name.lastname
                },
                email: $scope.user.email,
                password: $scope.user.password
            };
            var userLoginInfo = {
                email: $scope.user.email,
                password: $scope.user.password
            };
            loginService.register(newUserInfo).then(function (response) {
                console.log(response.data);
                accountService.login(userLoginInfo).then(function (response) {
                    $state.go('landing');
                }).catch(function (error) {
                    console.log(error, 'user could not login signinctrl23');
                });
            });
        }
    };

    // $scope.

    $scope.getMyCmInfo();

    //Active/Inactive button change

    $('.selector-button').click(function () {
        $(this).addClass('selected');
        $(this).removeClass('unselected');
        $('.selector-button').not($(this)).removeClass('selected');
        $('.selector-button').not($(this)).addClass('unselected');
    });

    var selectorButton = $('.selector-button');
    var signupField = $('.signup-field');
    var forgotPassword = $('.forgot-password');

    signupField.hide();

    //Sign in / Up Change Animations

    $('#sign-up').click(function () {
        $('.button-underline-half').animate({ 'margin-left': '50%' }, 300);
    });

    $('#sign-in').click(function () {
        $('.button-underline-half').animate({ 'margin-left': '0%' }, 300);
    });

    $('#sign-in').click(function () {

        // animate underline

        $('.btn-underline-half').animate({
            marginLeft: '0'
        }, 800);

        //animate fields

        setTimeout(function () {
            $('.firstname-field').slideUp(500);
            $('.name-field').animate({
                opacity: '0'
            }, 300);
        }, 200);
        setTimeout(function () {
            $('.lastname-field').slideUp(500);
            $('.lastname-field').animate({
                opacity: '0'
            }, 300);
        }, 200);
        setTimeout(function () {
            $('.confirm-email-field').slideUp(500);
            $('.confirm-email-field').animate({
                opacity: '0'
            }, 300);
        }, 200);
        setTimeout(function () {
            $('.confirm-field').slideUp(500);
            $('.confirm-field').animate({
                opacity: '0'
            }, 300);
        }, 200);

        // show forgot password

        setTimeout(function () {
            forgotPassword.animate({
                opacity: '1'
            }, 300).delay(250).slideDown(300);
        }, 100);
    });

    $('#sign-up').click(function () {

        // animate underline

        $('.btn-underline-half').animate({
            marginLeft: '50%'
        }, 800);

        // hide forgot password

        forgotPassword.animate({
            opacity: '0'
        }, 300)
        // .delay(250)
        .slideUp(300);

        // animate fields

        setTimeout(function () {
            $('.firstname-field').slideDown(500).css({
                opacity: 1,
                transition: 'opacity .30s'
            });
        }, 600);
        setTimeout(function () {
            $('.lastname-field').slideDown(500).css({
                opacity: 1,
                transition: 'opacity .30s'
            });
        }, 600);
        setTimeout(function () {
            $('.confirm-email-field').slideDown(500).css({
                opacity: 1,
                transition: 'opacity .30s'
            });
        }, 600);
        setTimeout(function () {
            $('.confirm-field').slideDown(500).css({
                opacity: 1,
                transition: 'opacity .30s'
            });
        }, 600);
    });

    // highlight underline of selected field
    $('.input').on('focus', function () {
        $(this).siblings('.underline').addClass('field-active');
    });
    $('.input').on('blur', function () {
        $(this).siblings('.underline').removeClass('field-active');
    });
}