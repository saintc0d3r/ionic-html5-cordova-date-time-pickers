// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('IndexController', function($scope, $cordovaDatePicker){
  // $scope.html5_calendar_input = (new Date()).toISOString();
  // $scope.html5_time_input = (new Date()).toISOString();
  $scope.cordova_time_picker_value = moment().format("hh:mm a");
  $scope.on_cordova_time_clicked = function(){
    var options = {
      date: new Date(),
      mode: 'time',
      allowOldDates: true,
      allowFutureDates: true,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#01a3e3',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#01a3e3'
    };  
    $cordovaDatePicker.show(options).then(function(date){
      $scope.cordova_time_picker_value = moment(date).format("hh:mm a");
    });  
  }
  
  $scope.cordova_date_picker_value = moment().format("DD MMM YYYY");
  $scope.on_cordova_date_clicked = function(){
    var options = {
      date: new Date(),
      mode: 'date',
      allowOldDates: true,
      allowFutureDates: true,
      doneButtonLabel: 'DONE',
      doneButtonColor: '#01a3e3',
      cancelButtonLabel: 'CANCEL',
      cancelButtonColor: '#01a3e3'
    };  
    $cordovaDatePicker.show(options).then(function(date){
      $scope.cordova_date_picker_value = moment(date).format("DD MMM YYYY");
    });  
  }
});