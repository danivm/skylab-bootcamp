(function () {
  'use strict';

  angular
    .module('projectFirebase')
    .config(config);

  function config($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}());
