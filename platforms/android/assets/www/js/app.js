angular.module('precip', ['ionic'])
  .controller('PrecipCtrl', function($scope, $http) {
    $scope.dan = "balls";
    $http.get('json/mplsweatherprecip.json')
      .success(function(data) {
        $scope.data = data.currently;
        // $scope.icon = data.currently.icon;
        var rawdata = data.currently;
        preciplogic(rawdata);
        precipiconlogic(rawdata);
      });
    preciplogic = function (data) {
      if (data.precipIntensity !== 0) {
        $scope.isPrecip = "YOU KNOW IT " + data.precipType;
      }
      else {
        $scope.isPrecip = "nahhhh, just " + data.summary;
      }
    }
    precipiconlogic = function (data) {
      if (data.icon ===  "clear-day") {
        $scope.icon = "wi-day-sunny";
      }
      else if (data.icon === "clear-night") {
        $scope.icon = "wi-night-clear";
      }
      else if (data.icon === "rain") {
        $scope.icon = "wi-day-rain";
      }
      else if (data.icon === "snow") {
        $scope.icon = "wi-day-snow";
      }
      else if (data.icon === "sleet") {
        $scope.icon = "wi-day-sleet";
      }
      else if (data.icon === "wind") {
        $scope.icon = "wi-day-windy";
      }
      else if (data.icon === "fog") {
        $scope.icon = "wi-day-fog";
      }
      else if (data.icon === "cloudy") {
        $scope.icon = "wi-day-cloudy";
      }
      else if (data.icon === "partly-cloudy-day") {
        $scope.icon = "wi-day-sunny-overcast";
      }
      else if (data.icon === "partly-cloudy-night") {
        $scope.icon = "wi-night-alt-cloudy";
      }
      else {
        $scope.icon = "wi-day-sunny";
      }
    }
  })
  .directive('precipDirective', function() {
    return {
      templateUrl: 'partials/precipDirective.html',
      controller: 'PrecipCtrl'
    }
  });



// clear-day   =>  wi-day-sunny
// clear-night   =>  wi-night-clear
// rain   =>  wi-day-rain
// snow   =>  wi-day-snow
// sleet   =>  wi-day-sleet
// wind   =>  wi-day-windy
// fog   =>  wi-day-fog
// cloudy   =>  wi-day-cloudy
// partly-cloudy-day   =>  wi-day-sunny-overcast
// partly-cloudy-night   =>  wi-night-alt-cloudy