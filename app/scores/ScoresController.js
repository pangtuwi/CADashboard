angular.module('CADashboard')
  .controller('ScoresController', ['$scope', '$routeParams', '$firebaseObject', '$firebaseArray',
  									 function ($scope, $routeParams, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://cadevclub.firebaseio.com/rounds/"+$routeParams.roundID);
  	$scope.round = $firebaseObject(ref);

    var ref2 = new Firebase("https://cadevclub.firebaseio.com/rounds/"+$routeParams.roundID+"/scores/users");
  	$scope.roundUsers = $firebaseArray(ref2);

  	$scope.getFormattedDate = function(unixTimeStamp) {
  		return formattedDateTime(unixTimeStamp);
    }

    $scope.getAverage = function (total, arrows) {
    	if (arrows == 0) return 0 
    	else return Math.round( (total/arrows) * 10) / 10;
    }

  }]);
