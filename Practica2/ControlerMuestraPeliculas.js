
angular.module('myApp',[])
        .controller('MuestraPeliculas',['$scope', 'PeliculasService',
        
        function($scope, PeliculasService){
            $scope.mostrarActores = PeliculasService.arrayActores;
            $scope.mostrarPelicula = PeliculasService.pelicula;
            $scope.peliculas = PeliculasService.todasPeliculas;
        }]

);

