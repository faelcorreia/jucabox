'use strict';

angular.module('jucabox', [
    'ngResource',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('app', {
            url: '/app',
            templateUrl: 'views/app.html',
            controller: 'AppCtrl',
            abstract: true
        })

        .state('app.main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            data: {
                title: 'Main'
            }
        })

        $urlRouterProvider.otherwise('/app/main')
    }
])