
angular.module('myApp',[])
        .controller('controlador',['$scope',
    function($scope){
        $scope.button1=1;
        $scope.button2=1;
        $scope.button3=1;
        $scope.crearCombinacion = true;
        $scope.combinacion=[];
        $scope.click = function(numero){
            
            if(numero == 1){
                $scope.button1 +=1;
            if($scope.button1>4){
                $scope.button1=1;
            }}
            if(numero == 2){
                $scope.button2 +=1;
            if($scope.button2>4){$scope.button2=1}
            }
            if(numero == 3){
                $scope.button3 +=1;
            if($scope.button3>4){$scope.button3=1}
            }

        };
        $scope.aceptar = function() {
            $scope.crearCombinacion = false;
            $scope.combinacion = [$scope.button1, $scope.button2, $scope.button3];
            $scope.button1 = 1;
            $scope.button2 = 1;
            $scope.button3 = 1;
        };
        
        $scope.combinaciones = [];
        
        $scope.validar = function(){
          $scope.combinaciones.push($scope.button1);
          $scope.combinaciones.push($scope.button2);  
          $scope.combinaciones.push($scope.button3);  
        };
}]);


