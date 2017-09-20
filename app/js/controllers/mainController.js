
gstDiary.controller('mainController', function ($scope, $state, $http) {

    $scope.isHome = false;

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
            $state.go('clients');
        } else if (index == 1) {
            $state.go('vendors');
        } else if (index == 2) {
            $state.go('products');
        } else if (index == 3) {
            $state.go('quotes');
        } else if (index == 4) {
            $state.go('deliveryNotes');
        } else if (index == 5) {
            $state.go('invoices');
        } else if (index == 6) {
            $state.go('purchase');
        } else if (index == 7) {
            $state.go('aboutUs');
        }
    }
});