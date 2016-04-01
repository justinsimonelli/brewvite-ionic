angular
.module('brewvite.controllers', ['brewvite.factory'])
.controller('AuthController', ['$scope', 'DataFactory', function($scope, DataFactory, $cordovaOauth, authTokens) {
	$scope.classShow = "hide";

	$scope.facebookLogin = function() {

		console.log("inside facebookLogin. authTokens=", authTokens);
        DataFactory.getDB();

		/*
       	$cordovaOauth.facebook("618876251595117", ["email"]).then(function(result) {
            //$localStorage.accessToken = result.access_token;
            //$location.path("/profile");
            console.log(result)
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
        */
    }
}])
    