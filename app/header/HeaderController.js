angular.module('CADashboard')
  .controller('HeaderController', ['$scope', '$location', function ($scope, $location) {

	$scope.getClass = function (path) {
	console.log ("path=" + path +"     location.path="+ $location.path());
	  //if ($location.path().substr(0, path.length) === path) {
	if ($location.path() === path) {
	    return 'active';
	  } else {
	    return '';
	  }
	}

  }]);


