gstDiary.controller('invoiceCtrl', function ($scope) {
    
        $scope.productList = [];
        $scope.productSelectedIndex = -1;
        this.invoice_date = new Date();
    
        $scope.productAddButtonClick = function () {
    
            if (($scope.product_name != undefined && $scope.price != undefined) && ($scope.quantity != undefined && $scope.sub_total != undefined)) {
                // add selected item
                $scope.productList.push({
                    name: $scope.product_name, price: $scope.price, quantity: $scope.quantity, sub_total: $scope.sub_total
                });
            }
        }
    
    });