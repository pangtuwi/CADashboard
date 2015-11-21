angular.module('CADashboard', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/rounds', {
        templateUrl : 'js/rounds/rounds.html',
        controller : 'RoundsController'
      })
      .otherwise({
        redirectTo: '/rounds'
      })
  }]);
