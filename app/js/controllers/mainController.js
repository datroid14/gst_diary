
gstDiary.controller('mainController', function ($scope, $state, $http, $rootScope) {

    $rootScope.isHome = false;

    $scope.menuList = [{
        "menu_title": "Client"
    }, {
        "menu_title": "Vendor"
    }, {
        "menu_title": "Product"
    }, {
        "menu_title": "Quatation"
    }, {
        "menu_title": "Delivery Note"
    }, {
        "menu_title": "Invoice"
    }, {
        "menu_title": "Purchase"
    }, {
        "menu_title": "About Us"
    }];

    $scope.showClickedItem = function (index) {

        if (index == 0) {
            $state.go('client');
        } else if (index == 1) {
            $state.go('vendor');
        } else if (index == 2) {
            $state.go('product');
        } else if (index == 3) {
            $state.go('quote');
        } else if (index == 4) {
            $state.go('deliveryNote');
        } else if (index == 5) {
            $state.go('invoice');
        } else if (index == 6) {
            $state.go('purchase');
        } else if (index == 7) {
            $state.go('aboutUs');
        }
    }
});