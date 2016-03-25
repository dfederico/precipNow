angular.module('precip', ['ionic', 'ui.router', 'ngCordova'])
    .directive('precipDirective', function () {
        return {
            templateUrl: 'partials/precipDirective.html',
            controller: 'PrecipCtrl'
        }
    })
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'partials/selector.html'
                })
                .state('geolocateZip', {
                    url: '/geolocateZip/:zip',
                    templateUrl: 'partials/dataDisplay.html',
                    controller: function($scope, $stateParams) {
                        $scope.zip = $stateParams.zip;
                    }
                })
                .state('geolocate', {
                    url: '/geolocate',
                    templateUrl: 'partials/dataDisplay.html'
                })
                .state('error', {
                    url: '/error',
                    templateUrl: 'partials/error.html'
                })
                .state('zip', {
                    url: '/zip',
                    templateUrl: 'partials/zip.html'
                })
        }
    ]);


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