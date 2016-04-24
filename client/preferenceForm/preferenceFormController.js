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

    $scope.exists = function (item, list) {
      return list.indexOf(item) > -1;
    }
    $scope.toggleAllergyCheckbox = function (item) {
      var idx = $scope.allergies.indexOf(item);
      if (idx > -1) $scope.allergies.splice(idx, 1);
      else $scope.allergies.push(item);
    };

    $scope.cuisines = {

      'Italian': 1,
      'Mexican': 1,
      'Southern_Soulfood': 1,
      'Southwestern': 1,
      'French': 1,
      'Indian': 1,
      'Chinese': 1,
      'Cajun_Creole': 1,
      'English': 1,
      'Mediterranean': 1,
      'Greek': 1,
      'Spanish': 1,
      'Thai': 1,
      'German': 1,
      'Moroccan': 1,
      'Irish': 1,
      'Cuban': 1,
      'Japanese': 1,
      'Swedish': 1,
      'Hawaiian': 1,
      'Hungarian': 1,
      'Portugese': 1,
      'American': 1
    };

    $scope.cuisineScores = [];

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
        cuisinePreference: $scope.cuisines,
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
          if (prefs[i].Italian) {
            console.log(prefs[i])
            delete prefs[i].id;
            delete prefs[i].user_id;
            $scope.cuisines = prefs[i];
          } else if (prefs[i].bitter) {
            $scope.tastePref = prefs[i];
          } else if (prefs[i].relation === 'liked') {
            $scope.preferredIngredients.push(prefs[i].ingredient);
          } else if (prefs[i].relation === 'disliked') {
            $scope.rejectedIngredients.push(prefs[i].ingredient);
          } else if (prefs[i].relation === 'allergy') {
            $scope.allergies.push(prefs[i].ingredient);
          } else if (prefs[i].diet) {
            $scope.diet = prefs[i].diet;
          }
        }
      });

    };
      $scope.getPrefs();

    }]);
