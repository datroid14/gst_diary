'use strict';

var gstDiary = angular.module('gstDiaryApp', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'ui.router']);

gstDiary.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /employee
    $urlRouterProvider.otherwise("/login")

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/views/login.html",
            controller: "loginController"
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/views/dashboard.html"
        })
        .state('client', {
            url: "/client",
            templateUrl: "app/views/client.html",
            controller: "invoiceCtrl"
        })
        .state('vendor', {
            url: "/vendor",
            templateUrl: "app/views/vendor.html",
            controller: "invoiceCtrl"
        })

        .state('product', {
            url: "/product",
            templateUrl: "app/views/product.html",
            controller: "invoiceCtrl"
        })

        .state('invoice', {
            url: "/invoice",
            templateUrl: "app/views/invoice.html",
            controller: "invoiceCtrl"
        })
        .state('quote', {
            url: "/quote",
            templateUrl: "app/views/quote.html",
            controller: "invoiceCtrl"
        })
        .state('deliveryNote', {
            url: "/deliveryNote",
            templateUrl: "app/views/deliveryNote.html",
            controller: "invoiceCtrl"
        })

        .state('purchase', {
            url: "/purchase",
            templateUrl: "app/views/purchase.html",
            controller: "invoiceCtrl"
        })
        .state('aboutUs', {
            url: "/aboutUs",
            templateUrl: "app/views/company.html"
        })

}]);