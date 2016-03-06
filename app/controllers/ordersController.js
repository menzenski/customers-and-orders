(function() {

    var OrdersController = function ($scope, $routeParams, customersFactory) {

        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            customersFactory.getCustomerById(customerId)
                .success(function(customer) {
                    $scope.customer = customer;
                })
                .error(function(data, status, headers, config) {
                    // handle error
                });
        }

        init();

    };

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);

}());
