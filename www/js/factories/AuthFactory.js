angular
  .module("brewvite.factory")
  .factory("AuthFactory", function($log, $http, $cordovaSQLite, $q, DataFactory){
    var factory = {};

    factory.getStoredAuthTokens = function(){
      var tokensQuery = "SELECT * FROM AUTH_TOKENS",
          tokensPromise = null;
      $log.debug("inside getStoredAuthTokens")

      if( !tokensPromise ){
        tokensPromise = $q.defer();

        $cordovaSQLite.execute(DataFactory.getDB(), tokensQuery).then(function(result){
          if( result.rows.length > 0 ){
            var tmpTokens = [];
            for( var i=0; i < result.rows.length; i++ ){
              tmpTokens.push(result.rows.item(i));
            }
          }else{
            console.log("no auth tokens found");
          }

          authTokens = tmpTokens;
          tokensPromise.resolve(authTokens)
        }, function(error){
          console.error("error querying for authTokens.", error);
        }).finally( function(){
          tokensPromise = null;
        } );
      }
      return tokensPromise.promise;  
    }

    factory.facebookLogin = function() {
      $log.debug("logging in...");
 /*
      $cordovaSQLite.execute( DataFactory.getDB(), "SELECT TOKEN FROM AUTH_TOKENS WHERE PROVIDER = 'facebook'" )
        .then( function( result ) {
              if( result != null && result.rows.length > 0 ){
                $log.debug(result.rows[0].token)
              }else{
                $log.debug('didn\'t find an access token, calling Facebook')
              }
            }, function( error ) {
                $log.error(error)
            } );  
        */

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

    return factory;
  });




