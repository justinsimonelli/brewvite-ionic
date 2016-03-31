angular.module('app.controllers', [])
     
.controller('whereCtrl', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	LoginFactory.facebookLogin();
}])
   
.controller('whoCtrl', function($scope) {

})
   
.controller('whenCtrl', function($scope) {

})

.controller('SignInCtrl', ['$scope', 'LoginFactory', function($scope, LoginFactory) {
	LoginFactory.facebookLogin();
}])
    