angular.module('myApp').service('PeliculasService'
, function () {
    this.arrayActores = [["Harrisson", "Ford", "12/07/42", "USA"], ["Mary Sean", "Young", "20/10/59", "USA"]];
    this.arrayActores2 = [["Mark", "Hammil", "22/11/62", "FR"], ["Harrison", "Ford", "12/07/42", "USA"]];
    this.pelicula = [this.arrayActores, "Blade Runner", "Ridley Scott", 1982];
    this.pelicula2 = [this.arrayActores2, "Star Wars", "George Lucas", 1977];
    this.todasPeliculas = [this.pelicula, this.pelicula2];
});

