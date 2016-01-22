var app = angular.module('app', ['ngRoute']);

app.config( ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/groups', {
            templateUrl: '/views/partials/groups.html',
            //controller: 'groupsController'
        })
        .when('/votePage', {
            templateUrl: '/views/partials/votePage.html',
            //controller: 'voteController'
        })
        .when('/', {
            templateUrl: '/views/partials/login.html'
        });
            $locationProvider.html5mode({enabled: true});
        }]);

app.controller("IndexController", ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.voter = {};
    $scope.voters = [];
    var fetchVoters = function() {
        return $http.get('/groups').then(function(response) {
            if(response.status !== 200) {
                throw new Error('Failed to fetch voters from the API');
            }
            $scope.voter = {};
            $scope.voters = response.data;
            return response.data;
        })
    };
    $scope.add = function(voter) {
        return $http.post('/add', voter).then(fetchVoters)
    };
    fetchVoters();
}]);



app.controller("logInController", ['$scope', '$http', function($scope, $http) {

}]);

app.controller("createAccountController", ['$scope', '$http', function($scope, $http) {

}]);

app.controller("logInController", ['$scope', '$http', function($scope, $http) {

}]);

