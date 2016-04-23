angular
  .module('menuApp')
  .controller('preferenceFormController', ['$scope', 'menuAppFactory', 'Survey', 'Auth', '$state', function($scope, menuAppFactory, Survey, Auth, $state) {
    // $scope.preferencesForm = Survey.preferencesForm;
    $scope.cuisinePref = [];
    $scope.tastePref = {};
    $scope.preferredIngredients = [];
    $scope.rejectedIngredients = [];
    $scope.diet = '';
    $scope.allergies = [];


    $scope.toggleAllergyCheckbox = function (item) {
      var idx = $scope.allergies.indexOf(item);
      if (idx > -1) $scope.allergies.splice(idx, 1);
      else $scope.allergies.push(item);
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

    $scope.sendPreferenceData = function () {
      var token = Auth.getToken();
      console.log("diet", $scope.diet);
      var preferenceObject = {
        tastePreference: $scope.tastePref,
        preferredIngredients: $scope.preferredIngredients,
        rejectedIngredients: $scope.rejectedIngredients,
        diet: $scope.diet,
        allergies: $scope.allergies,
        token: token
      }

      menuAppFactory.postUserPreference(preferenceObject)
      .then(function(data) {

      });
    };

    $scope.getPrefs = function() {
      menuAppFactory.getUserPreference()
      .then(function(prefs) {
        console.log('line 39: ',prefs);

        for (var i = 0; i < prefs.length; i++) {
          if (prefs[i].origin) {
            $scope.cuisinePref.push(prefs[i]);
          } else if (prefs[i].bitter) {
            $scope.tastePref = prefs[i];
          } else if (prefs[i].relation === 'liked') {
            $scope.preferredIngredients.push(prefs[i].ingredient);
          } else if (prefs[i].relation === 'disliked') {
            $scope.rejectedIngredients.push(prefs[i].ingredient);
          } else if (prefs[i].diet) {
            $scope.diet = prefs[i].diet;
          }
        }
      });

    };
      $scope.getPrefs();

    }]);
