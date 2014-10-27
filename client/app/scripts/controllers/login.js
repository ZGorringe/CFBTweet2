'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('cfbTweet')
  .controller('LoginCtrl', function ($scope, $http) {
    
    var user;
    var signup;

    $scope.signup = signup = {};
    signup.user = user = {};

    $scope.signupSubmit = function () {
    	if (
    			!user.firstname ||
    			!user.lastname ||
    			!user.email ||
    			!user.password1 ||
    			!user.password2
    	) {
    		console.log('Please fill out all form fields.');
    		return false;
    	} if (user.password1 !== user.password2) {
    		console.log('Your passwords must match.');
    		return false;
    	}
    	console.log(user);
    	var request = $http.post('/signup', user);
    	request.success(function (data) {
            console.log(data);
    	});
    	request.error(function (data) {
            console.log(data);
    	});
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});
