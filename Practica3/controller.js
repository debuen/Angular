
app.controller("PokemonController"
    , ['$scope', 'PokemonService', function($scope, PokemonService){
            
            PokemonService.getSaludo().get().$promise.then(
                function(respuesta){
                    $scope.players = respuesta.players;
                }, function(respuesta){
                    
                }
            );
    
            PokemonService.getSaludo().get({id:1}).$promise.then(
                function(respuesta){
                    $scope.playerAlone = respuesta;
                }, function(respuesta){
                    
                }
            );
    
    
       
        $scope.addNewpoke = function(){
            var info = {texto:"Saludo3", edad:"48"}; 
            PokemonService.getSaludo().save({id:12},info).$promise.then(
                    function(response){
                        
                    },
                    function(response){
                        
                    }
                    );
        };    
    }]);


