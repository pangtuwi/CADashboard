angular.module('CADashboard')
  .controller('AboutController', ['$scope', 'Config', function ($scope, Config) {

    // note the additional Config dependency above, which references the angular
    // constant I created in js/common/config.js. This is an example of a shared
    // dependency which can be imported into your controllers and used for data
    // processing. In this case, I pass the value of Config.email into $scope.author
    // which is then used in the view (html template) as {{author}}.
    $scope.author = Config.email;

    // you can also create functions on the scope so that they are available in the
    // view. This is commonly used for event handlers.
    $scope.getDate = function() {
      return new Date().toString();
    }

    $scope.getRandomNumber = function() {
      return Math.ceil(Math.random() * 9999);
    }

  }]);
