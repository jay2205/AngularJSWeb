(function () {
'use strict'

  angular.module('myFirstApp', [])
  .controller('myFirstController',function($scope){
    $scope.name ="Jay"
    $scope.sayHello = function () {
      return "Hello, World!";
    }
  });

})();
