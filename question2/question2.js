(function() {
    'use strict';
    angular.module('quadApp.question2', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/question2', {
                templateUrl: 'question2/question2.html',
                controller: 'Question2Ctrl'
            });
        }])

        .controller('Question2Ctrl', [ '$scope', 'stateFactory', function($scope, stateFactory) {
            $scope.modifyStates = function() {
                var states = stateFactory;

                var mostPopulated = null;
                var leastPopulated = null;

                //sort before rounding numbers or the rounding may affect the order unintentionally
                states.sort(function (a, b) {
                    var aArea = prepArea(a.area);
                    var bArea = prepArea(b.area);
                    if (aArea < bArea) return -1;
                    else if (bArea < aArea) return 1;
                    else if (a.name < b.name) return -1;
                    else if (b.name < a.name) return 1;
                    else return 0;
                });

                for (var i = 0, len = states.length; i < len; i++) {
                    states[i].population = Math.round(states[i].population / 1000) * 1000; // rounding population to 3 sig. figures
                    states[i].popDensity = Math.round(states[i].population / (prepArea(states[i].area) * 2.58999) * 100) / 100; // 2.58999 km = 1 sq mi

                    //set least and most populated state variables
                    if (!mostPopulated || states[i].population > mostPopulated.population) {
                        mostPopulated = states[i];
                    }
                    if (!leastPopulated || states[i].population < leastPopulated.population) {
                        leastPopulated = states[i];
                    }
                }

                console.log('- SORTED STATES -');
                console.log(states);
                console.log('- MOST POPULATED -');
                console.log(mostPopulated);
                console.log('- LEAST POPULATED -');
                console.log(leastPopulated);

                function prepArea(area) {
                    return parseFloat(area.replace(/,/g, '')); //may be able to replace with parseInt...replace strips out any commas
                }
            }
        }])

        .factory ("stateFactory", function() {
            return [{
                "name": "Alaska",
                "area": "663,268 sq mi",
                "population": 735132
            }, {
                "name": "California",
                "area": "163,696 sq mi",
                "population": 38332521
            }, {
                "name": "oregon",
                "area": "98,381 sq mi",
                "population": 3899353
            }, {
                "name": "washington",
                "area": "71,300 sq mi",
                "population": 6971406
            }];
        });
}());
