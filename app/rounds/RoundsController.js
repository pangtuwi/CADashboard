angular.module('CADashboard')
  .controller('RoundsController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

   // $scope.foo = 'bar';
   var ref = new Firebase("https://cadevclub.firebaseio.com/rounds");
  	// download the data into a local object
  	$scope.rounds = $firebaseObject(ref);

  	$scope.getFormattedDate = function(unixTimeStamp) {
  		return formattedDateTime(unixTimeStamp);
      //return new Date().toString();
    }

  }]);
