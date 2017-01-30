(function(){
  'use strict';

  angular.module("lunchCheck",[])
  .controller("LunchCheckController",LunchCheckController);
  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope){
    $scope.checkItems = function(){
      if ($scope.lunchItems == null || $scope.lunchItems == "") {
        $scope.message = "Please enter Data first";
      } else {
        var itemsArray =  $scope.lunchItems.split(",");
        var itemCount = itemsArray.length;
          if (itemsArray.length < 4){
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
      }
    };
  }

})();
