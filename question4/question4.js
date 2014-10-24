(function() {
    'use strict';

    angular.module('quadApp.question4', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/question4', {
                templateUrl: 'question4/question4.html',
                controller: 'Question4Ctrl'
            });
        }])

        .controller('Question4Ctrl', [ '$scope', 'dataFactory', function($scope, dataFactory) {
            $scope.loadData = function() {
                dataFactory.loadData()
                    .then(
                    function(data) {
                        console.log(' - SUCCESS - \n\n' + JSON.stringify(data));
                    },
                    function(error) {
                        console.log(' - ERROR - \n\n' + JSON.stringify(error));
                    },
                    function(update) {
                        console.log(' - UPDATE - \n\n' + update);
                    });
            }
        }])

        //error handling is in the controller, move to the factory for more complex cases
        .factory ("dataFactory", function($http, $q, $log) {
            return {
                loadData: function() {
                    var deferred = $q.defer();
                    var myData = {};
                    $q.all([
                        $http.get('http://headers.jsontest.com/'),
                        $http.get('http://time.jsontest.com')
                    ])
                        .then(
                        function (responses) {
                            deferred.resolve(JSON.stringify(responses));
                        });
                    return deferred.promise;
                }
            };
        });
}());




