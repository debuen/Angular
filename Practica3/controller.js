
app.controller("PokemonController"
    , ['$scope', 'PokemonService', function($scope, PokemonService){
            
            PokemonService.getSaludo().get().$promise.then(
                function(respuesta){
                    $scope.players = respuesta.players;
                }, function(respuesta){
                    
                }
            );
            
    }]);


