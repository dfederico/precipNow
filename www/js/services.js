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
    .service('WeatherService', function ($http, $q, $state) {
        // var deferred = $q.defer();
        this.getWeather = function (lat, lng) {
            // $http.get('http://blooming-scrubland-10281.herokuapp.com/forecast/45.5200/-122.6819')
            return $http.get('http://blooming-scrubland-10281.herokuapp.com/forecast/' + lat + '/' + lng)
                .then(function (data) {
                    if (data.data === undefined) {
                        $state.go('error');
                    }
                    else {
                        // deferred.resolve(data.data.currently);
                        return data.data.currently;
                    }
                }, function (error) {
                    $state.go('error');
                    // deferred.reject(error);
                });
            // return deferred.promise;
        }
    })
    .service('ZipService', function ($http, $q, $state) {
        this.getZipWeather = function (zip) {
            return $http.get('http://blooming-scrubland-10281.herokuapp.com/gforecast/' + zip)
                .then(function (data) {
                    if (data.data === undefined) {
                        $state.go('error');
                    }
                    else {
                        return data.data.results[0];
                    }
                }, function (error) {
                    $state.go('error');
                });
        }
    });