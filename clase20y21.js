//Prototipos JS//

//Funcion Constructora esta funcion se va a crear para que construya el objeto.

// Se hace referencia al objeto con la palabra this.
function persona (nombre, apellido, altura) {
 this.nombre = nombre
 this.apellido = apellido
 this.altura = altura 
}
 

persona.prototype.saludar = function(){

    if (this.altura > 1.8) {
     console.log(`Hola me llamo ${this.nombre}, ${this.apellido} mido ${this.altura}mts. Soy alto`);   
    } if (this.altura < 1.8) {
     console.log(`Hola me llamo ${this.nombre}, ${this.apellido} mido ${this.altura}mts. Soy bajo`); 
   }    
}

//New es una palabra reservada de js y es utilizada 
// para crear nuevos objetos dado un prototipo.
var dami = new persona('dami','presmanes','1.79')

dami.saludar ()