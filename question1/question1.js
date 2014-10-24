(function() {
    'use strict';

    angular.module('quadApp.question1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/question1', {
        templateUrl: 'question1/question1.html',
        controller: 'Question1Ctrl'
      });
    }])

    .controller('Question1Ctrl', ['$scope', function($scope) {
        $scope.superheroes = [
            {name:'Batman', option:'select all'},
            {name:'Iron Man', option:'select all'},
            {name:'The Hulk', option:'select all'},
            {name:'Wonder Woman', option:'select all'},
            {name:'Spiderman', option:'select all'},
            {name:'Aquaman', option:'select all'},
            {name:'Ant Man', option:'select all'}
        ];

        // clear chosen
        $scope.clearSuperheroes = function() {
            $("#superheroes").val('').trigger("chosen:updated");
        };

        // select all chosen
        $(document).on('click', '.group-result', function() { //modify this to be based off of superheroes
            var unselected = $(this).nextUntil();
            if(unselected.length) {
                $("#superheroes").val(Object.keys(unselected)).trigger("chosen:updated");
            }
        });
    }]);
}());