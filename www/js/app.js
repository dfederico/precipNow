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
                .state('locate', {
                    url: '/geolocate',
                    templateUrl: 'partials/dataDisplay.html'
                })
                .state('returnHome', {
                    url:'/',
                    templateUrl: 'partials/selector.html'
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