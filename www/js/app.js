// brewvite
angular.module('brewvite', ['ionic', 'brewvite.routes', 'brewvite.controllers', 'brewvite.factory', 'ngCordova', 'ngCordovaOauth'])

.config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(true);
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    
    /*
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    */
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
});