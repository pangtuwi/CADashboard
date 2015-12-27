angular.module('CADashboard', ['ngRoute', 'firebase'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl : 'app/index.html',
      })
      .when('/rounds', {
        templateUrl : 'app/rounds/rounds.html',
        controller : 'RoundsController'
      })
      .when('/users', {
        templateUrl : 'app/users/users.html',
        controller : 'UsersController'
      })
      .when('/about', {
        templateUrl : 'app/about/about.html',
        controller : 'AboutController'
      })

      .otherwise({
        redirectTo: '/'
      })
  }]);
