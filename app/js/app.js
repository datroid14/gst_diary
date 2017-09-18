'use strict';

var gstDiary = angular.module('gstDiaryApp', ['ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages', 'ui.router']);

gstDiary.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /employee
    $urlRouterProvider.otherwise("/index")

    $stateProvider
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

        .state('reports', {
            url: "/reports",
            templateUrl: "app/views/reports.html"
        })
        .state('company', {
            url: "/company",
            templateUrl: "app/views/company.html"
        })

}]);