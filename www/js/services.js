angular.module('app.services', [])
	.factory('LoginFactory', function($cordovaFacebook){
		var loginFactory = {};

		loginFactory.facebookLogin = function() {
			$cordovaFacebook.llogin(["public_profile", "email", "user_friends"])
    .then(function(success) {
      // { id: "634565435",
      //   lastName: "bob"
      //   ...
      // }
    }, function (error) {
      // error
    });
    	}

		return loginFactory;
	})
	;

