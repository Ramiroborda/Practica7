var app = angular.module('ProductApp', []);
app.controller('ProductController', ($scope) => {
    $scope.product = {};
    $scope.products = new Array();

    $scope.addProduct = () => {
        $scope.products.push({
            productName: $scope.product.productName,
            priceOfProduct: $scope.product.priceOfProduct,
            productQuantityAvailable: $scope.product.productQuantityAvailable,
            productDescription: $scope.product.productDescription,
        });   
    }

    $scope.deleteProduct = (i) => {
        $scope.products.splice(i, 1);
    }
});
