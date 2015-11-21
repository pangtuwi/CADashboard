angular.module('CADashboard', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl : 'js/index.html',
      })
      .when('/rounds', {
        templateUrl : 'js/rounds/rounds.html',
        controller : 'RoundsController'
      })
      .when('/about', {
        templateUrl : 'js/about/about.html',
        controller : 'AboutController'
      })

      .otherwise({
        redirectTo: '/'
      })
  }]);
