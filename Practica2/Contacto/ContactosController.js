angular.module('myApp',[])
        .controller('contactosController',['$scope', 'ContactosService',
        function($scope, ContactosService){
            $scope.altaUsuario;

            $scope.alta = function() {
                $scope.newUsuario = ContactosService.newUsuario();
                $scope.newUsuario.nombreUsuario=$scope.altaUsuario.nombre;
                $scope.newUsuario.emailUsuario=$scope.altaUsuario.email;
                console.log($scope.altaUsuario);
                ContactosService.addUserArray($scope.newUsuario.nombreUsuario);
            };
            
            $scope.mostrarUsuarios = ContactosService.arrayUsuarios;
            
        }]

);

