(function() {
    'use strict';
    var db = null;

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        if (window.cordova) {
            db = window.sqlitePlugin.openDatabase({name: "brewvite.db",iosDatabaseLocation: "default"});
            db.executeSql("CREATE TABLE IF NOT EXISTS auth_tokens(id integer, provider text primary key, token text, endpoint text, sort integer DEFAULT 0)", [], function (res) {
              console.log('successfully created table')
            }, function(error) {
              console.log('error creating table, error=' + error.message);
            });
        } else {
            db = window.openDatabase("brewvite.db", "1.0", "brewvite.db", 1024 * 1024 * 100);
        }
    }

    var DataFactory = function($log, $http, $cordovaSQLite, $q) {

        // Public
        var getDB = function() {
            return db;
        };

        return {
            getDB: getDB
        };
    };

    angular
        .module("brewvite")
        .factory("DataFactory", DataFactory);
}());