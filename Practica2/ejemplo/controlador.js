angular.module('myApp', [])
        .controller('controlador', ['$scope','obtenCombinacion',
function ($scope,obtenCombinacion) {
    $scope.opcio1 = 1;
    $scope.opcio2 = 1;
    $scope.opcio3 = 1;
    $scope.crearCombinacion=true;
    $scope.validaCombinacio=false;
   //la guardo en el service $scope.password=[]; //guardem la combinacio creada
    
    $scope.clicaOpcio = function (numero) {
        if (numero == 1) {
            $scope.opcio1 += 1;
            if ($scope.opcio1 > 4) {
                $scope.opcio1 = 1;
            }
        }
        if (numero == 2) {
            $scope.opcio2 += 1;
            if ($scope.opcio2 > 4) {
                $scope.opcio2 = 1;
            }
        }
        if(numero==3){
            $scope.opcio3 += 1;
            if ($scope.opcio3 > 4) {
                $scope.opcio3 = 1;
            }
        }
    };
    /*L'usuari valida la combinacio. Ocultem per generar i mostrem per buscar*/
    $scope.aceptaCombinacion=function(){
        $scope.crearCombinacion=false;
        $scope.validaCombinacio=true;
        //$scope.password=[$scope.opcio1,$scope.opcio2,$scope.opcio3];
        obtenCombinacion.setCombinacion([$scope.opcio1,$scope.opcio2,$scope.opcio3]);
        $scope.opcio1=1; $scope.opcio2=1; $scope.opcio3=1;
    };
    $scope.combinaciones= [];
   /* $scope.combinaciones[0]=[1,2,3];
    $scope.combinaciones[1]=[1,1,4];*/
    $scope.validarCombinacion=function(){
        var op1check="diferent", op2check="diferent", op3check="diferent";
        //if($scope.opcio1==$scope.password[0]){
        if($scope.opcio1==obtenCombinacion.getNumeroCombinacion(0)){
            op1check="igual";
        }
        if($scope.opcio2==obtenCombinacion.getNumeroCombinacion(1)){
            op2check="igual";
        }
        if($scope.opcio3==obtenCombinacion.getNumeroCombinacion(2)){
            op3check="igual";
        }
        var combi = [   [$scope.opcio1,op1check],
                        [ $scope.opcio2,op2check ],
                        [$scope.opcio3,op3check]
                    ];
         $scope.combinaciones.push(combi);
    };
}]);