angular.module('CADashboard')
  .controller('RoundsController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

   // $scope.foo = 'bar';
   var ref = new Firebase("https://cadevclub.firebaseio.com/rounds");
   var query = ref.orderByChild("createdAt");
  	// download the data into a local object
  	$scope.rounds = $firebaseArray(query);

  	$scope.getFormattedDate = function(unixTimeStamp) {
  		return formattedDateTime(unixTimeStamp);
      //return new Date().toString();
    }

  }]);
