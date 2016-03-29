angular.module('menuApp')
.controller('preferenceSurveyController', ['$scope', '$mdDialog', 'Survey', 'Utils', function($scope, $mdDialog, Survey, Utils) {




  $scope.tastePreference = {
    spicy: 1,
    meaty: 1,
    sour: 1,
    sweet: 1,
    salty: 1,
    bitter: 1
  };

  $scope.dietaryRestrictions = '';

  $scope.userAllergies = [];

  $scope.toggleAllergyCheckbox = function (item) {
    var idx = $scope.userAllergies.indexOf(item);
        if (idx > -1) $scope.userAllergies.splice(idx, 1);
        else $scope.userAllergies.push(item);
  };

  $scope.allergyList = [
    'Dairy',
    'Egg',
    'Gluten',
    'Peanut',
    'Seafood',
    'Sesame',
    'Soy',
    'Sulfite',
    'Tree nut',
    'Wheat'
  ];

  $scope.cuisinePreference = {
    american: 1,
    italian: 1,
    mexican: 1,
    southern_soulfood: 1,
    french: 1,
    southwestern: 1,
    indian: 1,
    chinese: 1,
    cajun_creole: 1,
    english: 1,
    mediterranean: 1,
    greek: 1,
    spanish: 1,
    german: 1,
    thai: 1,
    moroccan: 1,
    irish: 1,
    japanese: 1,
    cuban: 1,
    hawaiian: 1,
    swedish: 1,
    hungarian: 1,
    portugese: 1
  };

  $scope.changeNutritionValue = function () {
    if ($scope.nutritionValue) {
      $scope.nutritionPreference[$scope.selectedNutrition] = $scope.nutritionValue;
    }
  };

  $scope.nutritionPreference = {};

  $scope.nutritionAttributes = [
    'Potassium',
    'Sodium',
    'Cholestrol',
    'Trans Fat',
    'Saturated Fat',
    'Carbohydrates',
    'Fiber',
    'Protein',
    'Vitamin C',
    'Calcium',
    'Iron',
    'Sugar',
    'Energy',
    'Fat',
    'Vitamin_a'
  ];

  $scope.preferredIngredients = [];
  $scope.rejectedIngredients = [];


  $scope.sendPreferenceData = function () {
    var preferenceData = {
      tastePreference: $scope.tastePreference,
      dietaryRestrictions: $scope.dietaryRestrictions,
      userAllergies: $scope.userAllergies,
      cuisinePreference: $scope.cuisinePreference,
      nutritionPreference: $scope.nutritionPreference,
      preferredIngredients: $scope.preferredIngredients,
      rejectedIngredients: $scope.rejectedIngredients
    };
    menuAppFactory.postUserPreference(preferenceData)
    .then(function(data) {
      // console.log('++line 45 inside restaurantMenu() in restaurantListCtrl', data);c
      // $state.go('menuView', {menuData: data});
    });

  };



// TEMPORARY BEFORE THISSS. UP TO NOW IS PREFERENCEFORM CONTROLLER


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
    if($scope.foodPics.first.length === choicesCount &&
       $scope.foodPics.second.length === choicesCount &&
        $scope.foodPics.third.length === choicesCount) {
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
    Survey.preferencesForm.tastePreference.salty = Math.round(salty_total / numberOfPics) + 3;
    Survey.preferencesForm.tastePreference.sour = Math.round(sour_total / numberOfPics) + 3;
    Survey.preferencesForm.tastePreference.meaty = Math.round(meaty_total / numberOfPics) + 3;
    Survey.preferencesForm.tastePreference.bitter = Math.round(bitter_total / numberOfPics) + 3;
    Survey.preferencesForm.tastePreference.sweet = Math.round(sweet_total / numberOfPics) + 3;
    Survey.preferencesForm.tastePreference.spicy = Math.round(spicy_total / numberOfPics) + 3;
  };

  var initCuisinePreferences = function () {
    tallyCuisineScores();

    var scores = _.map(Survey.preferencesForm.cuisinePreference, function(values, cuisine) {
      return [cuisine, values.score];
    });

    scores.sort(function(a, b) {
      return a[1] - b[1];
    });

    var lowerBound = Math.floor((scores.length - 1)/3);
    var upperBound = Math.floor(((scores.length - 1)/3)) * 2;

    _.forEach(scores, function(score, index) {
      if (index <= lowerBound) {
        Survey.preferencesForm.cuisinePreference[score[0]].eval = 1;
      }
      if (index > lowerBound && index <= upperBound) {
        Survey.preferencesForm.cuisinePreference[score[0]].eval = 2;
      }
      if (index > upperBound) {
        Survey.preferencesForm.cuisinePreference[score[0]].eval = 3;
      }
    });
  };

  var tallyCuisineScores = function() {
    var choicePoints = [3, 1, -1];
    var relatedCuisinePoints = [0.5, 0, -0.5];

    _.forEach($scope.foodPics.first, function(dish) {
      Survey.preferencesForm.cuisinePreference[dish.cuisine].score += choicePoints[0];

      _.forEach(dish.relatedCuisines, function(cuisine) {
        Survey.preferencesForm.cuisinePreference[cuisine].score += relatedCuisinePoints[0];
      });
    });

    _.forEach($scope.foodPics.second, function(dish) {
      Survey.preferencesForm.cuisinePreference[dish.cuisine].score += choicePoints[1];

      _.forEach(dish.relatedCuisines, function(cuisine) {
        Survey.preferencesForm.cuisinePreference[cuisine].score += relatedCuisinePoints[1];
      });
    });

    _.forEach($scope.foodPics.third, function(dish) {
      Survey.preferencesForm.cuisinePreference[dish.cuisine].score += choicePoints[2];

      _.forEach(dish.relatedCuisines, function(cuisine) {
        Survey.preferencesForm.cuisinePreference[cuisine].score += relatedCuisinePoints[2];
      });
    });
  };

  var initIngredientPreferences = function() {
    var liked = Utils.mostFreqElements(Utils.createHistogram($scope.foodPics.first, 'ingredients'), 3);
    var disliked = Utils.mostFreqElements(Utils.createHistogram($scope.foodPics.third, 'ingredients'), 3);

    var uniqIngredients = Utils.removeMatches(liked, disliked);

    Survey.preferencesForm.preferredIngredients = uniqIngredients[0];
    Survey.preferencesForm.rejectedIngredients = uniqIngredients[1];

  };

  $scope.checkChoicesStorage = function() {
    if($scope.foodPics.storage.length === 0 && $scope.foodPics.choices.length === 0) {
      initTastePreferences();
      initCuisinePreferences();
      initIngredientPreferences();
      return true;
    } else {
      return false;
    }
  };
}]);
