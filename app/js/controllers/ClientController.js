gstDiary.controller('clientCtrl', function ($scope) {

    $scope.clientList = [];
    $scope.currentSelectedIndex = -1;

    $scope.saveButtonClick = function () {

        if (($scope.client_name != undefined && $scope.contact_no != undefined) && ($scope.client_mail != undefined && $scope.client_address1 != undefined)) {
            // add selected item
            $scope.advanceList.push({
                name: $scope.client_name, contact_no: $scope.contact_no, email: $scope.client_mail, address_line1: $scope.client_address1,
                address_line2: $scope.client_address2
            });
        }
    }

});