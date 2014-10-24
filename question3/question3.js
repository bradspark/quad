'use strict';

angular.module('quadApp.question3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/question3', {
            templateUrl: 'question3/question3.html',
            controller: 'Question3Ctrl'
        });
    }])

    .controller('Question3Ctrl', [function() {

    }]);