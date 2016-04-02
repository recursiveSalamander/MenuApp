angular
  .module('menuApp')
  .controller('preferenceFormController', ['$scope', 'menuAppFactory', 'Survey', 'Auth', function($scope, menuAppFactory, Survey, Auth) {
    $scope.preferencesForm = Survey.preferencesForm;

    $scope.dietaryRestrictions = '';

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

    $scope.sendPreferenceData = function () {
      Survey.preferencesForm.token = Auth.getToken();

      menuAppFactory.postUserPreference(Survey.preferencesForm)
      .then(function(data) {});
    };

    var getPrefs = function() {
      menuAppFactory.getUserPreference()
      .then(function(prefs) {
        console.log('line 37: ',prefs);
        $scope.userPrefs = prefs;
      })
    };
    getPrefs();

  }]);
