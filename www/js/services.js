angular.module('app.services', [])
	.factory('LoginFactory', function(DataFactory, $cordovaSQLite){
		var loginFactory = {};
		var db = DataFactory.getDB();

		loginFactory.facebookLogin = function($log) {
			$cordovaSQLite.execute( db, "SELECT TOKEN FROM AUTH_TOKENS WHERE PROVIDER = 'facebook'" )
				.then( function( result ) {
			    		console.log(result.rows[0].token)
				    }, function( error ) {
				      return error;
				    } );	
    	}

		return loginFactory;
	})
	;

