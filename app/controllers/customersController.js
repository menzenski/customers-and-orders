(function() {

    var CustomersController = function ($scope, $log, customersFactory,
                                        appSettings) {
        $scope.sortVar = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers()
                .success(function(customers) {
                    $scope.customers = customers;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                    $log.log(data.error + ' ' + status);
                });
        }

        init();

        $scope.doSort = function(propName) {
           $scope.sortVar = propName;
           $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = [
        '$scope', '$log', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);

}());
