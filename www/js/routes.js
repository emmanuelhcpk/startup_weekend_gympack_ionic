angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('inicioDeSesióN', {
      url: '/page1',
      templateUrl: 'templates/inicioDeSesióN.html',
      controller: 'LoginController'
    })
            
        
    .state('registro', {
      url: '/page2',
      templateUrl: 'templates/registro.html',
      controller: 'SignupController'
    })

    .state('gymPack.rutinas', {
      url: '/page4',
      views: {
        'tab1': {
          templateUrl: 'templates/rutinas.html',
          controller: 'rutinasCtrl'
        }
      }
    })
    .state('ver-rutina', {
      url: '/page7',
      views: {
        'tab1': {
          templateUrl: 'templates/rutina.html',
          controller: 'rutinasCtrl'
        }
      }
    }) 
      
    
      
        
    .state('gymPack.progreso', {
      url: '/page5',
      views: {
        'tab2': {
          templateUrl: 'templates/progreso.html',
          controller: 'progresoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('gymPack.establecimientos', {
      url: '/page6',
      views: {
        'tab3': {
          templateUrl: 'templates/establecimientos.html',
          controller: 'GymController'
        }
      }
    })
        
      
    
      
    .state('gymPack', {
      url: '/page3',
      abstract:true,
      templateUrl: 'templates/gymPack.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});