angular
  .module('menuApp')
  .controller('preferenceFormController', ['$scope', 'menuAppFactory', 'Survey', 'Auth', '$state', function($scope, menuAppFactory, Survey, Auth, $state) {
    $scope.preferencesForm = Survey.preferencesForm;
    $scope.dietaryRestrictions = '';
    $scope.cuisinePref = [];
    $scope.tastePref = {};
    $scope.preferredIngredients = [];
    $scope.rejectedIngredients = [];

    $scope.toggleAllergyCheckbox = function (item) {
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

    $scope.sendPreferenceData = function () {
      var token = Auth.getToken();
      var preferenceObject = {
        tastePreference: $scope.tastePref,
        preferredIngredients: $scope.preferredIngredients,
        rejectedIngredients: $scope.rejectedIngredients,
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
          }
        }
            console.log('cuisinePref',$scope.cuisinePref);
            console.log('tastePref: ',$scope.tastePref);
            console.log('ingredientPrefLike: ',$scope.ingredientPrefLike);
            console.log('ingredientPrefDislike: ',$scope.ingredientPrefDislike);
      });

    };
      $scope.getPrefs();
      console.log('++line 61 in referenceFormCtrl',$scope.preferencesForm);

    }]);
