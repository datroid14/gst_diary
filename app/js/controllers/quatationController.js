gstDiary.controller('quatationCtrl', function ($scope, $rootScope) {
    
        $rootScope.isHome = true;
        $scope.quoteList = [];
        $scope.productSelectedIndex = -1;
        this.invoice_date = new Date();
    
        $scope.addProduct = function () {
    
            if ($scope.productName != undefined && $scope.price != undefined) {
                // add selected item
                $scope.quoteList.push({
                    name: $scope.productName, price: $scope.price
                });
            }
            $scope.clearFields();
        }
    
        $scope.deleteProduct = function (index) {
    
            // add selected item
            $scope.quoteList.splice(index, 1);
        }
    
        $scope.productListItemClick = function (index) {
            $scope.productSelectedIndex = index;
            $scope.productName = $scope.quoteList[$scope.productSelectedIndex].name;
            $scope.price = $scope.quoteList[$scope.productSelectedIndex].price;
        }
    
        $scope.clearFields = function () {
            $scope.productName = "";
            $scope.price = "";
        }
    
    });