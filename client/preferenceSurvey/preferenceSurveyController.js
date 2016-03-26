angular.module('menuApp')
.controller('preferenceSurveyController', ['$scope', function($scope) {
  $scope.foodPics = {
    selected: null,
    first: [],
    second: [],
    third: [],
    choices: [
            //First set of choices
            {
              label: 'spaghetti_italy',
              salty: 3,
              sour: 3,
              meaty: 2,
              bitter: 3,
              sweet: 2,
              spicy: 1,
              ingredients: []
            },
            {
              label: 'gumbo_cajuncreole',
              salty: 2,
              sour: 2,
              meaty: 3,
              bitter: 2,
              sweet: 1,
              spicy: 2,
              ingredients: []
            },
            {
              label: 'mapotofu_china',
              salty: 3,
              sour: 1,
              meaty: 2,
              bitter: 2,
              sweet: 1,
              spicy: 3,
              ingredients: []
            }
            ],

            storage: [
            //Second set of choices
            {
              label: 'chickenshwarma_mediterranean',
              salty: 2,
              sour: 2,
              meaty: 3,
              bitter: 3,
              sweet: 2,
              spicy: 2,
              ingredients: []
            },
            {
              label: 'hamburger_america',
              salty: 3,
              sour: 1,
              meaty: 3,
              bitter: 2,
              sweet: 1,
              spicy: 1,
              ingredients: []
            },
            {
              label: 'ostkaka_sweden',
              salty: 1,
              sour: 1,
              meaty: 3,
              bitter: 1,
              sweet: 3,
              spicy: 1,
              ingredients: []
            },

            //third set of choices
            {
              label: 'caldoverde_portugal',
              salty: 3,
              sour: 3,
              meaty: 1,
              bitter: 1,
              sweet: 1,
              spicy: 2,
              ingredients: []
            },
            {
              label: 'curry_india',
              salty: 2,
              sour: 1,
              meaty: 1,
              bitter: 3,
              sweet: 1,
              spicy: 3,
              ingredients: []
            },
            {
              label: 'crepe_france',
              salty: 2,
              sour: 3,
              meaty: 2,
              bitter: 2,
              sweet: 3,
              spicy: 1,
              ingredients: []
            },

            // //fourth set of choices
            // {
            //   label: 'roastbeef_england',
            //   salty: 2,
            //   sour: 1,
            //   meaty: 3,
            //   bitter: 2,
            //   sweet: 1,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'tagine_morocco',
            //   salty: 3,
            //   sour: 3,
            //   meaty: 1,
            //   bitter: 3,
            //   sweet: 3,
            //   spicy: 2,
            //   ingredients: []
            // },
            // {
            //   label: 'tzatziki_greece',
            //   salty: 3,
            //   sour: 2,
            //   meaty: 1,
            //   bitter: 2,
            //   sweet: 2,
            //   spicy: 1,
            //   ingredients: []
            // },
            //
            // //fifth set of choices
            // {
            //   label: 'tostones_cuba',
            //   salty: 1,
            //   sour: 3,
            //   meaty: 2,
            //   bitter: 2,
            //   sweet: 3,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'ramen_japan',
            //   salty: 3,
            //   sour: 3,
            //   meaty: 1,
            //   bitter: 2,
            //   sweet: 1,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'chimichanga_southwestern',
            //   salty: 3,
            //   sour: 2,
            //   meaty: 3,
            //   bitter: 1,
            //   sweet: 1,
            //   spicy: 3,
            //   ingredients: []
            // },
            //
            //
            // //sixth set of choices
            // {
            //   label: 'chickenfriedsteak_southernsoul',
            //   salty: 3,
            //   sour: 1,
            //   meaty: 3,
            //   bitter: 3,
            //   sweet: 1,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'currywurst_germany',
            //   salty: 3,
            //   sour: 1,
            //   meaty: 3,
            //   bitter: 2,
            //   sweet: 1,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'halaszle_hungary',
            //   salty: 2,
            //   sour: 3,
            //   meaty: 1,
            //   bitter: 2,
            //   sweet: 2,
            //   spicy: 3,
            //   ingredients: []
            // },
            //
            //
            // //seventh set of choices
            // {
            //   label: 'salsa_mexico',
            //   salty: 2,
            //   sour: 3,
            //   meaty: 1,
            //   bitter: 1,
            //   sweet: 1,
            //   spicy: 3,
            //   ingredients: []
            // },
            // {
            //   label: 'sodabread_ireland',
            //   salty: 3,
            //   sour: 1,
            //   meaty: 1,
            //   bitter: 3,
            //   sweet: 2,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'tomyamgoong_thai',
            //   salty: 3,
            //   sour: 2,
            //   meaty: 1,
            //   bitter: 1,
            //   sweet: 1,
            //   spicy: 3,
            //   ingredients: []
            // },
            //
            // //eighth set of choices
            // {
            //   label: 'pokebowl_hawaii',
            //   salty: 1,
            //   sour: 3,
            //   meaty: 2,
            //   bitter: 2,
            //   sweet: 3,
            //   spicy: 1,
            //   ingredients: []
            // },
            // {
            //   label: 'croquette_spain',
            //   salty: 3,
            //   sour: 2,
            //   meaty: 3,
            //   bitter: 3,
            //   sweet: 1,
            //   spicy: 1,
            //   ingredients: []
            // },
            //
            // //DELETE THIS
            // {
            //   label: 'mapotofu_china',
            //   salty: 3,
            //   sour: 1,
            //   meaty: 2,
            //   bitter: 2,
            //   sweet: 1,
            //   spicy: 3,
            //   ingredients: []
            // }
            ]
          };

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
    //representative ingredients
    $scope.cuisineIndex = {
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
    };
  };

  $scope.checkChoicesStorage = function() {
    if($scope.foodPics.storage.length === 0){
      if($scope.foodPics.choices.length === 0){
        initTastePreferences();
        //initCuisinePreferences();
        //initIngredientPreferences();
        return true;
      }
    }
    else{
      return false;
    }
  };


}]);
