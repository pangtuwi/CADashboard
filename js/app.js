var app = angular.module('CADashboard', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'js/rounds/rounds.html',
		controller : 'RoundsController'
	})
}]);