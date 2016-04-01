angular
  .module('menuApp')

.controller('menuViewController', ['$window', '$scope', 'menuAppFactory', '$stateParams', 'userInfo', function($window, $scope, menuAppFactory, $stateParams, userInfo) {
  $scope.data = $stateParams.menuData;
  $scope.restaurantName = $stateParams.restaurantName;
  $scope.restaurantId = $stateParams.restaurantId;
  $scope.dietRestrictionMessage = {};
  $scope.allergyRestrictionMessage = [];

  $scope.checkDietRestrictions = function(dietObj) {
    var bool = false;
      for(var key in dietObj){
        if(dietObj[key] > 1){
          $scope.dietRestrictionMessage.diet = key;
          if(dietObj[key] === 2){
            $scope.dietRestrictionMessage.message = "may";
          }
          if(dietObj[key] === 3){
            $scope.dietRestrictionMessage.message = "most likely";
          }
          bool = true;
        }
      }
    return bool;
  }


  $scope.checkAllergyRestrictions = function(allergyObj) {
    var bool = false;
      for(var key in allergyObj){
        if(allergyObj[key] > 1){
          var allergyRestriction = {};
          allergyRestriction.allergy = key;
          if(allergyObj[key] === 2){
            allergyRestriction.message = "may";
          }
          if(allergyObj[key] === 3){
            allergyRestriction.message = "most likely";
          }
          $scope.allergyRestrictionMessage.push(allergyRestriction);
          bool = true;
        }
      }
    return bool;
  }


  $scope.onRating = function(rating, entryId, restaurantId) {
    console.log('++line 21 in onrating rating: ', rating);
    console.log('++line 22 in onrating entryId: ', entryId);
    console.log('++line 23 in onrating restaurantId: ', restaurantId );
    userInfo.ratingInfo(rating, entryId, restaurantId);
  };
}]);
