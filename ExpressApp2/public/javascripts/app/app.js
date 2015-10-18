// declare an angular module for this page with angular winjs module included
var angularApp = angular.module('main', ['ngRoute','ui.bootstrap','ngAnimate']);

angularApp
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //Setup routes to load partial templates from server. TemplateUrl is the location for the server view (in this case partial html files)
        $routeProvider
            .when('/', { templateUrl: 'index', controller: 'contactViewController' })
            .when('/contact', { templateUrl: 'contact', controller: 'contactViewController' })
            .when('/about', { templateUrl: 'about', controller: 'contactViewController' })
            .when('/home', { templateUrl: 'home', controller: 'contactViewController' })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }])