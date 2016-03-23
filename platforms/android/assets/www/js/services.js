angular.module('precip')
    .service('GeoService', function ($q, $cordovaGeolocation) {
        var deferred = $q.defer();
        this.getGeo = function () {
            var posOptions = {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            };

            $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                var latlngObj = {
                    "lat": lat,
                    "lng": long
                }
                deferred.resolve(latlngObj);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    })
    .service('WeatherService', function ($http, $q) {
        var deferred = $q.defer();
        this.getWeather = function (lat, lng) {
            // $http.get('http://blooming-scrubland-10281.herokuapp.com/forecast/45.5200/-122.6819')
            $http.get('http://blooming-scrubland-10281.herokuapp.com/forecast/' + lat + '/' + lng)
                .then(function (data) {
                    deferred.resolve(data.data.currently);
                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        }
    });