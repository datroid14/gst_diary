gstDiary.controller('loginController', function ($scope, $state, $window, $rootScope) {
    var self = this;
    $rootScope.isHome = false;
    console.log("isHome", $rootScope.isHome);
    $scope.login = function () {
        if ($scope.username == "admin" && $scope.password == "admin") {
            $state.go('vendor');
        } else {
            alert("Invalid login credentials...");
        }
    }
});