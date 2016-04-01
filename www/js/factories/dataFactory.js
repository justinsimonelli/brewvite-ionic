angular
  .module("brewvite.factory", [])
  .factory("DataFactory", function(){
    var factory = {};
    var db = null;

    //var DataFactory = function($log, $http, $cordovaSQLite, $q)

    /** PRIVATE METHODS **/

    function initDBAndTables(){
      if( window.cordova ){
        db = window.sqlitePlugin.openDatabase({name: "brewvite.db",iosDatabaseLocation: "default"});
      } else{
        db = window.openDatabase("brewvite.db", "1.0", "brewvite.db", 1024 * 1024 * 100);
      }

      $cordovaSQLite.execute(db, "PRAGMA table_info(auth_tokens)").then(function(result){
        if( result.rows.length == 0 ){
          $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS auth_tokens(id integer, provider text primary key, token text, endpoint text, sort integer DEFAULT 0)");
        }
      }, function(error){
        //console.error(error)
      });
    }

    /** PUBLIC METHODS **/

    factory.getDB = function(){
      if(db == null){
        db = initDBAndTables();
      }
      return db;
    }

    return factory;

  });