angular
  .module('menuApp')
  .controller('preferenceFormController', ['$scope', 'menuAppFactory', 'Survey', function($scope, menuAppFactory, Survey) {
    $scope.preferencesForm = Survey.preferencesForm;
    $scope.tastePreference = {
      spicy: 1,
      meaty: 1,
      sour: 1,
      sweet: 1,
      salty: 1,
      bitter: 1
    };

    $scope.dietaryRestrictions = '';

    //$scope.userAllergies = [];

    $scope.toggleAllergyCheckbox = function(item) {
      var idx = $scope.preferencesForm.allergies.indexOf(item);
      if (idx > -1) $scope.preferencesForm.allergies.splice(idx, 1);
      else $scope.preferencesForm.allergies.push(item);
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
      var preferencesData = Survey.preferencesForm;
      preferencesData.token = menuAppFactory.currentToken;
      menuAppFactory.postUserPreference(preferencesData)
      .then(function(data) {});
    };
  }]);
