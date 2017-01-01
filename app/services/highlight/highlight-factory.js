// highlight-factory.js

(function() {

	'use strict';

  angular
    .module('api.highlights', [])
    .factory('Highlights', function(){

      var Highlights = {};

      Highlights.all = function() {
        return highlightsList;
      };

      return Highlights;

    });


})();