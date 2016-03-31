( function() {
  'use strict';

  var DataFactory = function( $log, $http, $cordovaSQLite, $q ) {
    var db = null,
    	_sql = null,
    	tablesInitialized = false;

    if( window.cordova ) {
      db = $cordovaSQLite.openDB( {
        name: "brewvite.db",
        location: 1
      } );
    } else {
      db = window.openDatabase( "brewvite.db", "1.0", "brewvite.db", 1024 * 1024 * 100 );
    }

    //private
    var initTables = function(){
    	$log.debug("initTables running...");
    	executeSql("CREATE TABLE IF NOT EXISTS auth_tokens(id integer, provider text primary key, token text, endpoint text, sort integer DEFAULT 0)");
    }

    var executeSql = function(sql){
    	$cordovaSQLite.execute( db, sql ).then( function( result ) {
    		$log.debug(sql);
    		$log.debug(result)
    		return result;
	    }, function( error ) {
	      $log.error(error);
	      return error;
	    } );
    }

    initTables();

    // Public
    var getDB = function() {
      return db;
    };

    return {
      getDB: getDB
    };
  };

  angular
    .module( "app" )
    .factory( "DataFactory", DataFactory );
}() );