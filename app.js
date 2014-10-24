'use strict';

// Declare app level module which depends on questions, and components
angular.module('quadApp', [
    'ngRoute',
    'quadApp.question1',
    'quadApp.question2',
    'quadApp.question3',
    'quadApp.question4',
    'localytics.directives'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/question1'});
}]);
