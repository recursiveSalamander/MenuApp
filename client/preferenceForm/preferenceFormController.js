angular.module('menuApp')
.controller('preferenceFormController', ['$scope', 'menuAppFactory', function($scope, menuAppFactory) {
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
  // $scope.showTabDialog = function(ev) {
  //   $mdDialog.show({
  //     // controller: preferenceFormController,
  //     templateUrl: 'test.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true
  //   });
  //       // .then(function(answer) {
  //       //   $scope.status = 'You said the information was "' + answer + '".';
  //       // }, function() {
  //       //   $scope.status = 'You cancelled the dialog.';
  //       // });
  // };


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
}]);
