angular.module('CADashboard')
  .controller('UserController', ['$scope', '$routeParams', '$firebaseObject', function ($scope, $routeParams, $firebaseObject) {
//  .controller('UserController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
    var ref = new Firebase("https://cadevclub.firebaseio.com/users/"+$routeParams.userID);
  	$scope.user = $firebaseObject(ref);

  }]);
