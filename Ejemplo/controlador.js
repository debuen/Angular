
angular.module('myApp',[])
        .controller('controlador',['$scope',
    function($scope){
        $scope.misValores = ["primer", "segon", "tercer"];
        $scope.tipusValor="positiu";
        $scope.myCol = 'lightblue';
        $scope.num = 2;
        $scope.resultado = 0;
        $scope.suma = function(){
            $scope.resultado = parseInt($scope.myCol) + parseInt($scope.num);
            if($scope.resultado < 0){
                $scope.tipusValor = "negatiu";
            }else{
                $scope.tipusValor = "positiu";
            }  
    };
}]);