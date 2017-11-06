angular.module('myApp').service('ContactosService'
        , function () {
            
            this.newUsuario = function () {
                altaUsuarioService = new Usuario();
                function Usuario() {
                    this.nombreUsuario;
                    this.emailUsuario;
                };
                return altaUsuarioService;
            }
            
            this.arrayUsuarios = [];
            this.addUserArray = function (text) {
                this.arrayUsuarios.push(text);
                console.log(this.arrayUsuarios);
            };
        });

