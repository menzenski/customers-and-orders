(function() {

    var OrdersController = function ($scope, $routeParams, customersFactory) {

        var customerId = $routeParams.customerId;
        $scope.customer = null;

        function init() {
            $scope.customer = customersFactory.getCustomerById(customerId);
        }

        init();

    };

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);

}());
