//Arrays//

//Los arrays son estructuras que nos permiten organizar elementos dentro de una collección.//
// Estos elementos pueden ser números, strings, booleanos, objetos, etc.//

var dami = {
    nombre: 'Dami',
    apellido: 'press',
    altura: '1.72'
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: '1.85'

}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Gomez',
    altura: '1.76'

}

var nico = {
    nombre: 'Nico',
    apellido: 'Gonzalez',
    altura: '1.73'

}

var personas = [dami, pedro, julieta, nico]

personas[0]
//nos devuelve {nombre:dami,apellido:press,altura:1.72}
personas[0].altura
//nos devuelve
//1.72

// Para recorrer el array podemos utilizar For//
// De la siguiente forma// 

for(var i = 0; i < personas.length;i ++) {
    var personas = personas[i]
    console.log(`${personas.nombre} mide ${personas.altura}mts`);  
}

