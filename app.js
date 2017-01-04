/**
 * Created by williammangoni on 03/01/2017.
 */
(function () {

'use strict';

angular.module('myApp', [])
.controller('MyController', ['$scope', function($scope) {

    $scope.lunchs = "";
    $scope.textBtn = "Ops!";
    $scope.textMsg = "Please enter data first";
    $scope.myAlert = "alert-warning";

    $scope.displayNumeric = function () {
        calculateNumericForString($scope.lunchs);
    };

    $scope.clickBtn = function() {
        $('.alert').fadeIn();
        setTimeout(function(){$('.alert').fadeOut('dp-none');}, 4000);
    }

    function calculateNumericForString(string) {
        var stringSplit = string.split(',');
        var totalStringValue = stringSplit.length;
        if (totalStringValue > 3) {
            $scope.textBtn = "Ops!";
            $scope.textMsg = "Too much!";
            $scope.myAlert = "alert-danger";
        } else if (totalStringValue > 0 && string != '' && string != ' ') {
            $scope.textBtn = "Good!";
            $scope.textMsg = "Enjoy!";
            $scope.myAlert = "alert-success";
        } else {
            $scope.textBtn = "Ops!";
            $scope.textMsg = "Please enter data first";
            $scope.myAlert = "alert-warning";
        }

    }
}]);

})();