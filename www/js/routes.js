angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.where', {
    url: '/location',
    views: {
      'tab1': {
        templateUrl: 'templates/where.html',
        controller: 'whereCtrl'
      }
    }
  })

  .state('tabsController.who', {
    url: '/invites',
    views: {
      'tab2': {
        templateUrl: 'templates/who.html',
        controller: 'whoCtrl'
      }
    }
  })

  .state('tabsController.when', {
    url: '/date',
    views: {
      'tab3': {
        templateUrl: 'templates/when.html',
        controller: 'whenCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/location')

  

});