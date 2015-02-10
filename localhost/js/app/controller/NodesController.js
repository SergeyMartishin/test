angular.module('App').controller('NodesController', [
    '$scope',
    '$http',
    function ($scope, $http) {
        /*$scope.$watch = function() {*/
            $http.get('https://api.github.com/repos/cakephp/cakephp/pulls'
            ).success(function (data) {
                    $scope.nodes = data;
                    console.log('Repos data: ' + $scope.nodes);
                });
            $scope.orderProp = 'age';
            $scope.quantity = 5;

            $scope.labels = ["Build", "Progress"];
            $scope.data = [300, 500];

            var enabled = false;
            $scope.paneEnabled = function () {
                return enabled;
            };
            $scope.enablePane = function () {
                enabled = !enabled;
            };
        /*}, true*/
    }]
);