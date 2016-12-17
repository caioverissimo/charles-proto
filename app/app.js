(function() {
  'use strict';

  angular
    .module('charlesProto', [
      'ui.router'
    ]);

  angular
    .module('charlesProto')
    .run(appRun)


  angular
    .module('charlesProto')
    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'layout/partial-test.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('a1', {
            url: '/a1',
            templateUrl: 'layout/partial-test2.html'    
        });

         // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

  function appRun() {
    console.log('Charles Proto Run Function is working!');
  }
})();
