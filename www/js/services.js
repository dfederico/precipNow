angular.module('precip')
    .service('GeoService',
        function(GeoService) {
            return "my service works!";
        })
    .service('ItemsService', function($cordovaGeolocation) {
        return {
            getItem: function() {
                // var dfd = $q.defer()

                // setTimeout(function() {
                //   dfd.resolve({
                //     name: 'Mittens Cat'
                //   })
                // }, 2000)
                console.log("through service");
                var posOptions = {
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0
                };

                $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;
                    return {latit: lat, lng: long};
                    console.log(lat, long);
                }, function(err) {
                    // $ionicLoading.hide();
                    console.log(err);
                });
                // return lat+long;
                // return "dan";

                // return dfd.promise
            }
        }
    });