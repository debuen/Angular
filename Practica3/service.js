app.service("PokemonService", ["$resource", function($resource){
    this.getSaludo=function(){
        return $resource('pokemon.php/pokemons/:id', null, {});
    }
}]);


