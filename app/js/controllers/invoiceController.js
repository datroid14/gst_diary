gstDiary.controller('invoiceCtrl', function ($scope, $rootScope) {

    $rootScope.isHome = true;
    console.log("isHome Invoice", $rootScope.isHome);
    $scope.productList = [];
    $scope.productSelectedIndex = -1;
    this.invoice_date = new Date();

    $scope.addProduct = function () {

        if (($scope.productName != undefined && $scope.price != undefined) && ($scope.quantity != undefined && $scope.subTotal != undefined)) {
            // add selected item
            $scope.productList.push({
                name: $scope.productName, price: $scope.price, quantity: $scope.quantity, sub_total: $scope.subTotal
            });
        }
        $scope.calculateTotal();
        $scope.clearFields();
    }

    $scope.calculateSubTotal = function () {
        $scope.subTotal = $scope.price * $scope.quantity;
        console.log("Subtotal = " + $scope.subTotal);
    }

    $scope.calculateTotal = function () {
        var totalAmount = 0;
        for (var i = 0; i < $scope.productList.length; i++) {
            totalAmount = totalAmount + $scope.productList[i].sub_total;
        }
        $scope.totalAmount = totalAmount;
    }

    $scope.deleteProduct = function (index) {

        // add selected item
        $scope.productList.splice(index, 1);
    }

    $scope.productListItemClick = function (index) {
        $scope.productSelectedIndex = index;
        $scope.productName = $scope.productList[$scope.productSelectedIndex].name;
        $scope.price = $scope.productList[$scope.productSelectedIndex].price;
        $scope.quantity = $scope.productList[$scope.productSelectedIndex].quantity;
        $scope.subTotal = $scope.productList[$scope.productSelectedIndex].sub_total;
    }

    $scope.clearFields = function () {
        $scope.productName = "";
        $scope.price = "";
        $scope.quantity = "";
        $scope.subTotal = "";
    }

});