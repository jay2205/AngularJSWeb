( function(){
  'use strict';
  
  angular.module("NameCalculator",[])
  .controller('NameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalNameValue=0;
    $scope.displayNumeric = function(){
      var totalValue = calculateNumericForString($scope.name);
      $scope.totalNameValue = totalValue;
    };

    function calculateNumericForString(string){
      var totalNumberValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalNumberValue += string.charCodeAt(i);
      }
      return totalNumberValue;
    };

  });
})();
