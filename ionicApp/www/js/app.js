// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('index', {
      url: "/",
      abstract: true,
      templateUrl: "index.html"
    })
    .state('test', {
      url: "/test",
      templateUrl: "templates/test.html"
    })
    .state('start', {
      url: "/start",
      templateUrl: "templates/start.html",
      controller: 'startCtrl'
    })
    .state('quiz_q1',{
      url:"/q1",
      templateUrl: "templates/quiz_q1.html",
      controller: 'q1Ctrl',
    })
    .state('quiz_q2', {
      url: "/q2",
      templateUrl: "templates/quiz_q2.html",
      controller: 'q2Ctrl',
      params:{'q1_correct': null}
    })
  .state('result', {
      url: "/result",
      templateUrl: "templates/result.html",
      controller: 'resultCtrl',
      params:{total_correct: null}
    });
  $urlRouterProvider.otherwise("/start");

})
//controllers
starter.controller('startCtrl', function($scope, $ionicModal, $ionicLoading, $state){
  //noinspection JSAnnotator
  $scope.start_OnClick = function () {
    console.log("onclick function triggered!");
    $state.go("quiz_q1");
  };

});

starter.controller('q1Ctrl',function($scope, $state, $stateParams){
  $scope.q1_OnClick = function (isCorrect) {
    if(isCorrect){
      console.log("onclick function triggered!");
      $state.go("quiz_q2",{q1_correct: true});
      }
      else
      $state.go("quiz_q2",{q1_correct: false});
  };
});
//
starter.controller('q2Ctrl',function($scope, $state, $stateParams){
  var num_correct;
  $scope.q2_OnClick = function(){
    num_correct = 0;
    if($stateParams.q1_correct)
      num_correct+=1;
    if($scope.answer === "Thursday") {
      num_correct+=1;
      $scope.answer= '';
      $state.go("result", {total_correct: num_correct});
    }else {
      $scope.answer = '';
      $state.go("result", {total_correct: num_correct});
    }
  }

});

starter.controller('resultCtrl',function($scope, $state, $stateParams){
  $scope.result = [
    {text: $stateParams.total_correct}
  ]
  $scope.result_OnClick = function(){
    $state.go("start");
  }
});
