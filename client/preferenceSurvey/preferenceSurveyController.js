angular.module('menuApp')
.controller('preferenceSurveyController', ['$scope', 'Survey', function($scope, Survey) {
  $scope.foodPics = {
          selected: null,
          first: [],
          second: [],
          third: [],
          choices: [],
          storage: []};

  Survey.retrieveSurvey(function(data) {
    $scope.foodPics.choices = data.choices;
    $scope.foodPics.storage = data.storage;
  });

          var choicesCount = 1;
          $scope.submitThreePictures = function(){
    //make pictures disappear
    if($scope.foodPics.first.length === choicesCount && $scope.foodPics.second.length === choicesCount && $scope.foodPics.third.length === choicesCount){
      angular.element( document.querySelectorAll('.foodpicture')).addClass('ng-hide');
      $scope.foodPics.choices.splice(0,3);
      if($scope.foodPics.storage.length === 0) {
        alert('YOBUDDIES');
      }

      else{
        for(var i=0; i<3; i++){
          $scope.foodPics.choices.push($scope.foodPics.storage[i]);
        }
        $scope.foodPics.storage.splice(0,3);
      }
      choicesCount++;
    }
    else{
      alert('YO FOLLOW INSTRUCTIONS DUMDUM');
    }

  };


  $scope.checkChoicesContainer = function() {
    if($scope.foodPics.choices.length === 0 && $scope.foodPics.storage.length !== 0){
      return true;
    }
    else{
      return false;
    }
  };


  var initTastePreferences = function() {
    var salty_total = 0;
    var sour_total = 0;
    var meaty_total = 0;
    var bitter_total = 0;
    var sweet_total = 0;
    var spicy_total = 0;
    var numberOfPics = $scope.foodPics.first.length;
    var verifyRankOrder = function(first, second, third){
      if(first >= second && second >= third) return true;
      if(first <= second && second <= third) return true;
      return false;
    };

    for(var i=0; i<numberOfPics; i++){
      if(verifyRankOrder($scope.foodPics.first[i].salty, $scope.foodPics.second[i].salty, $scope.foodPics.third[i].salty)){
        //subtotal is actually $scope.foodPics.first[i] - $scope.foodPics.second[i]) - ($scope.foodPics.third[i] - $scope.foodPics.second[i])
        salty_total += ($scope.foodPics.first[i].salty - $scope.foodPics.third[i].salty);
      }
      if(verifyRankOrder($scope.foodPics.first[i].sour, $scope.foodPics.second[i].sour, $scope.foodPics.third[i].sour)){
        sour_total += ($scope.foodPics.first[i].sour - $scope.foodPics.third[i].sour);
      }
      if(verifyRankOrder($scope.foodPics.first[i].meaty, $scope.foodPics.second[i].meaty, $scope.foodPics.third[i].meaty)){
        meaty_total += ($scope.foodPics.first[i].meaty - $scope.foodPics.third[i].meaty);
      }
      if(verifyRankOrder($scope.foodPics.first[i].bitter, $scope.foodPics.second[i].bitter, $scope.foodPics.third[i].bitter)){
        bitter_total += ($scope.foodPics.first[i].bitter - $scope.foodPics.third[i].bitter);
      }
      if(verifyRankOrder($scope.foodPics.first[i].sweet, $scope.foodPics.second[i].sweet, $scope.foodPics.third[i].sweet)){
        sweet_total += ($scope.foodPics.first[i].sweet - $scope.foodPics.third[i].sweet);
      }
      if(verifyRankOrder($scope.foodPics.first[i].spicy, $scope.foodPics.second[i].spicy, $scope.foodPics.third[i].spicy)){
        spicy_total += ($scope.foodPics.first[i].spicy - $scope.foodPics.third[i].spicy);
      }
    }
    $scope.tasteIndex_salty = salty_total / numberOfPics;
    $scope.tasteIndex_sour = sour_total / numberOfPics;
    $scope.tasteIndex_meaty = meaty_total / numberOfPics;
    $scope.tasteIndex_bitter = bitter_total / numberOfPics;
    $scope.tasteIndex_sweet = sweet_total / numberOfPics;
    $scope.tasteIndex_spicy = spicy_total / numberOfPics;
  };

  var initCuisinePreferences = function () {
    //actual cuisine choices
    console.log($scope.foodPics);
    //representative ingredients
    $scope.cuisineIndex = {
      american: {score: 0, index: 0},
      italian: {score: 0, index: 0},
      mexican: {score: 0, index: 0},
      southern_soulfood: {score: 0, index: 0},
      french: {score: 0, index: 0},
      southwestern: {score: 0, index: 0},
      indian: {score: 0, index: 0},
      chinese: {score: 0, index: 0},
      cajun_creole: {score: 0, index: 0},
      english: {score: 0, index: 0},
      mediterranean: {score: 0, index: 0},
      greek: {score: 0, index: 0},
      spanish: {score: 0, index: 0},
      german: {score: 0, index: 0},
      thai: {score: 0, index: 0},
      Moroccan: {score: 0, index: 0},
      irish: {score: 0, index: 0},
      japanese: {score: 0, index: 0},
      cuban: {score: 0, index: 0},
      hawaiian: {score: 0, index: 0},
      swedish: {score: 0, index: 0},
      hungarian: {score: 0, index: 0},
      portugese: {score: 0, index: 0}
    };
  };

  $scope.checkChoicesStorage = function() {
    if($scope.foodPics.storage.length === 0 && $scope.foodPics.choices.length === 0) {
      initTastePreferences();
      initCuisinePreferences();
      //initIngredientPreferences();
      return true;
    } else {
      return false;
    }
  };


}]);
