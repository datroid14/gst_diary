gstDiary.controller('loginController', function($scope, $state, $window, $rootScope) {
    var self = this;

    $scope.login = function(){

        $state.go('vendors');
    }

});