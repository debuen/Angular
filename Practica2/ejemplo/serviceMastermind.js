angular.module('myApp').service(
        'obtenCombinacion',function(){
            this.password=[]; //guardem la combinacio creada
            this.getCombinacion=function(){
              return this.password;  
            };
            this.getNumeroCombinacion=function(posicio){
                return this.password[posicio];
            };
            this.setCombinacion=function(pass){
                this.password=pass;
            };
        });