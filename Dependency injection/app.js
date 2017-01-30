(function (){
  'use strict'

  angular.module('DIApp',[])
  .controller('DIController',DIController);

  //methods for avoidng dependency injection errors
  //1 -> .controller('DIController',["$scope","$filter","$injector",DIController]);
  //2 ->   DIController.$inject = ['$scope','$filter'];

  DIController.$inject = ['$scope','$filter'];
  function DIController ($scope,$filter){
    $scope.name = "Jay";
    $scope.upper = function (){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name)
    };
  }
})();
