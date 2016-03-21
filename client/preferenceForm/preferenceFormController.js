angular.module('menuApp')
.controller('preferenceFormController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
  $scope.tastepreference = {
    spicy: 1,
    meaty: 1,
    sour: 1,
    sweet: 1,
    salty: 1,
    bitter: 1
  }

  $scope.dietaryrestrictions = {
    lacto_vegetarian: false,
    ovo_vegetarian: false,
    pescetarian: false,
    vegan: false,
    vegetarian: false
  }

  $scope.allergies = {
    dairy: false,
    egg: false,
    gluten: false,
    peanut: false,
    seafood: false,
    sesame: false,
    soy: false,
    sulfite: false,
    tree_nut: false,
    wheat: false
  }

  $scope.cuisinepreference = {
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
    Moroccan: 1,
    irish: 1,
    japanese: 1,
    cuban: 1,
    hawaiian: 1,
    swedish: 1,
    hungarian: 1,
    portugese: 1
  }


  $scope.hello = {
    one: 1,
    two: 2,
    three: 3
  }
  $scope.dummy = [
    'hello', 'hi'
  ];


  $scope.changeNutritionValue = function(){
    console.log('KEKEKEKEKEKKEKEKEK');
    if($scope.nutritionValue){
      $scope.userNutritionPreferences[$scope.selectedNutrition] = $scope.nutritionValue;
    }
  }

  $scope.userNutritionPreferences = {};

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
  ]

  $scope.userInput = function() {
    debugger;
  }
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

}]);
