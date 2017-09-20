'use strict';

var gstDiary = angular.module('gstDiaryApp', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'ui.router']);

gstDiary.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /employee
    $urlRouterProvider.otherwise("/login")

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/views/login.html",
            controller: "loginController",
            controllerAs: "LC"
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/views/dashboard.html"
        })
        .state('clients', {
            url: "/clients",
            templateUrl: "app/views/client.html"
        })
        .state('vendors', {
            url: "/vendors",
            templateUrl: "app/views/vendor.html"
        })

        .state('products', {
            url: "/products",
            templateUrl: "app/views/items.html"
        })

        .state('invoices', {
            url: "/invoices",
            templateUrl: "app/views/invoices.html"
        })
        .state('quotes', {
            url: "/quotes",
            templateUrl: "app/views/quotes.html"
        })
        .state('deliveryNotes', {
            url: "/deliveryNotes",
            templateUrl: "app/views/deliveryNotes.html"
        })

        .state('purchase', {
            url: "/purchase",
            templateUrl: "app/views/reports.html"
        })
        .state('aboutUs', {
            url: "/aboutUs",
            templateUrl: "app/views/company.html"
        })

}]);