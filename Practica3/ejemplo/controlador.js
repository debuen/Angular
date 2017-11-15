app.controller('ContactosController',
    ['$scope', 'ContactosService',
        function ($scope, ContactosService) {
            $scope.nom=ContactosService.elNom;
            $scope.contactos = ContactosService.contactos;
         
            $scope.addContacto=function(){
                var cont= new Contacto();
                cont.nom = $scope.nomNouContacte;
                cont.email = $scope.emailNouContacte;
                ContactosService.contactos.push(cont);
            };
            
        }]);