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
        .state('client', {
            url: "/client",
            templateUrl: "app/views/client.html"
        })
        .state('vendor', {
            url: "/vendor",
            templateUrl: "app/views/vendor.html"
        })

        .state('product', {
            url: "/product",
            templateUrl: "app/views/product.html"
        })

        .state('invoice', {
            url: "/invoice",
            templateUrl: "app/views/invoice.html"
        })
        .state('quote', {
            url: "/quote",
            templateUrl: "app/views/quote.html"
        })
        .state('deliveryNote', {
            url: "/deliveryNote",
            templateUrl: "app/views/deliveryNote.html"
        })

        .state('purchase', {
            url: "/purchase",
            templateUrl: "app/views/purchase.html"
        })
        .state('aboutUs', {
            url: "/aboutUs",
            templateUrl: "app/views/company.html"
        })

}]);