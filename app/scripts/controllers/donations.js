'use strict';

/**
 * @ngdoc function
 * @name upToApp.controller:DonationsCtrl
 * @description
 * # DonationsCtrl
 * Controller of the upToApp
 */
angular.module('upToApp')
       .controller('DonationsCtrl', function ($scope,$http) {
          $http.get('http://localhost:9000/donations.json').success(function(data){
            $scope.donations = data;
    });
    $scope.gridOptions = {
    data: 'donations'
};
});
