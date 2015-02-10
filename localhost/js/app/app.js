var options = ['ngRoute', 'ngResource', 'chart.js'];
angular.module('App', options).config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            // route for my home page
            .when('/Home', {
                templateUrl : '/pages/home.html',
                controller  : 'HomeController',
                controllerAs : 'home'
            })
            // rout for nodes list
            .when('/Nodes', {
                templateUrl: '/pages/nodes-list.html',
                controller: 'NodesController',
                controllerAs : 'nodes'
            })
            .when('/AboutMe', {
                templateUrl: '/pages/about-me.html',
                controller: 'AboutMeController',
                controllerAs : 'about'
            })
            .when('/:accordionPane', {
                controller: 'NodesController',
                template: '<div></div>'
            })
            /*when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).*/
            .otherwise({
                redirectTo: '/Home'
            });
    }]);