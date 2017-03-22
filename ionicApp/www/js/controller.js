/**
 * Created by Jingxuan on 3/22/2017.
 */
angular.module('starter.controllers', [])

  .controller('homeCtrl', function($scope, $state,$stateParams) {
    $scope.startGame1 = function(){
      $state.go("game_1", {
        "imageQuestionAnswer": null,
        'textQuestionAnswer': null
      })
    }
    $scope.startGame2 = function(){
      $state.go("game_2", {
        "imageQuestionAnswer": null,
        'textQuestionAnswer': null
      })
    }
    $scope.startAbout = function(){
      $state.go("about", {
        "imageQuestionAnswer": null,
        'textQuestionAnswer': null
      })
    }
  })

  .controller('aboutCtrl', function($scope, $state,$stateParams) {
    $scope.startQuiz = function(){
      $state.go("imageQuestion", {
        "imageQuestionAnswer": null,
        'textQuestionAnswer': null
      })
    }
  })

  .controller('game1Ctrl', function($scope, $state,$stateParams) {
    $scope.startQuiz = function(){
      $state.go("imageQuestion")
    }
  })

  .controller('game2Ctrl', function($scope, $state,$stateParams) {
    $scope.startQuiz = function(){
      $state.go("imageQuestion")
    }
  })

  .controller('resultCtrl', function($scope, $state,$stateParams) {
    $scope.startQuiz = function(){
      $state.go("imageQuestion")
    }
  })
