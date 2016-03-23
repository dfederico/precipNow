angular.module('precip')
    .controller('PrecipCtrl', function ($scope, $http, $cordovaGeolocation, WeatherService, GeoService) {
        ionic.Platform.ready(function () {
            // will execute when device is ready, or immediately if the device is already ready.
            // var weather = WeatherService.getWeather(45.5200, -122.6819)
            //     .then(function (result) {
            //         $scope.weather = result;
            //         preciplogic($scope.weather);
            //         precipiconlogic($scope.weather);
            //     }, function (error) {
            //
            //     });
            $scope.loaded = false;
            preciplogic = function (data) {
                if (data.precipIntensity !== 0) {
                    $scope.isPrecip = "YOU KNOW IT - " + data.precipType.toUpperCase();
                } else {
                    $scope.isPrecip = "nahhhh, it's just " + data.summary.toLowerCase();
                }
            }
            GeoService.getGeo()
                .then(function (result) {
                    $scope.coords = result;
                    console.log($scope.coords);
                    // var weather = WeatherService.getWeather(45.5200, -122.6819)
                    WeatherService.getWeather($scope.coords.lat, $scope.coords.lng)
                        .then(function (result) {
                            $scope.loaded = true;
                            $scope.weather = result;
                            preciplogic($scope.weather);
                            precipiconlogic($scope.weather);
                        }, function (error) {

                        });
                }, function (error) {

                });
            precipiconlogic = function (data) {
                if (data.icon === "clear-day") {
                    $scope.icon = "wi-day-sunny";
                } else if (data.icon === "clear-night") {
                    $scope.icon = "wi-night-clear";
                } else if (data.icon === "rain") {
                    $scope.icon = "wi-day-rain";
                } else if (data.icon === "snow") {
                    $scope.icon = "wi-day-snow";
                } else if (data.icon === "sleet") {
                    $scope.icon = "wi-day-sleet";
                } else if (data.icon === "wind") {
                    $scope.icon = "wi-day-windy";
                } else if (data.icon === "fog") {
                    $scope.icon = "wi-day-fog";
                } else if (data.icon === "cloudy") {
                    $scope.icon = "wi-day-cloudy";
                } else if (data.icon === "partly-cloudy-day") {
                    $scope.icon = "wi-day-sunny-overcast";
                } else if (data.icon === "partly-cloudy-night") {
                    $scope.icon = "wi-night-alt-cloudy";
                } else {
                    $scope.icon = "wi-day-sunny";
                }
            }
        });
    });