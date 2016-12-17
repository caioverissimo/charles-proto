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
            views: {
              'header': {
                templateUrl: 'layout/header.html'
              },
              'content': {
                templateUrl: 'layout/home.html'
              }
            }
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('help-and-tips', {
            url: '/help-and-tips',
            views: {
              'header': {
                templateUrl: 'layout/header.html'
              },
              'content': {
                templateUrl: 'layout/help-and-tips.html'
              }
            }
        })

         // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

  function appRun() {
    console.log('Charles Proto Run Function is working!');
  }
})();
