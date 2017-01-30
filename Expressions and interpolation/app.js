(function (){
  'use strict';
  angular.module("MsgApp",[])
  .controller("MsgController",MsgController);

  MsgController.$inject=["$scope"];
  function MsgController($scope){
    $scope.name = "Jay";
    $scope.bulbState="on";
    $scope.sayMessage = function () {
      return "Save electricity";
    }

    $scope.offBulb = function(){
      $scope.bulbState = "off";
    }
    
  }
})();
