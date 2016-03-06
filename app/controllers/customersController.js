(function() {

    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortVar = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersFactory.getCustomers();
        }

        init();

        $scope.doSort = function(propName) {
           $scope.sortVar = propName;
           $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);

}());
