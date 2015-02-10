angular.module('App').controller('AppController',[
    '$scope',
    '$location',
    function($scope, $location) {
        $scope.isCurrentPath = function (path) {
            return $location.path() == path;
        };
    }]
);