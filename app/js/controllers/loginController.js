gstDiary.controller('loginController', function ($scope, $state, $window, $rootScope) {
    var self = this;
    $rootScope.isHome = false;
    $scope.login = function () {
        console.log($scope.username + " " + $scope.password);
        if ($scope.username == "admin" && $scope.password == "admin") {
            $state.go('vendor');
        } else {
            alert("Invalid login credentials...");
        }
    }
});