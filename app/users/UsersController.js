angular.module('CADashboard')
  .controller('UsersController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

    var ref = new Firebase("https://cadevclub.firebaseio.com/users");
  	// download the data into a local object
  	$scope.data = $firebaseObject(ref);

  }]);
