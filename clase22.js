//Prototipos JS//

//Funcion Constructora esta funcion se va a crear para que construya el objeto.

// Se hace referencia al objeto con la palabra this.
function persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura 
   }
   
  // En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.

  //Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.


   persona.prototype.saludar = function() {
     console.log(`Hola me llamo ${this.nombre}, ${this.apellido} mido ${this.altura}mts.`);     
   }
   persona.prototype.soyAlto = function() {
       return this.altura > 1.8
       }
   //New es una palabra reservada de js y es utilizada 
   // para crear nuevos objetos dado un prototipo.
   var dami = new persona('dami','presmanes','1.82')
   
   dami.saludar ()
   dami.soyAlto ()