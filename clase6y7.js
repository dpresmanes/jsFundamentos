var damian = {
    nombre:'damian',
    apellido:'presmanes',
    edad: 28

}

var dario = {
    nombre : 'dario',
    apellido : 'pesce',
    edad: 37
}

function imprimirNombreEnMayus (persona) {      // Dentro de  () definimos variables locales a la funcion. Esta variable puede ser igual a la global//
   var {nombre} = persona
    console.log(nombre.toUpperCase())

}

function saludar(persona){
    var { nombre, edad } = persona 
    console.log(`Hola mi nombre es ${nombre} tengo ${edad}`)
}


saludar(damian)
//imprimirNombreEnMayus({nombre:'pepito'})

// Clase 7//

function cumpleAnos (persona) {
    persona.edad +=1
}

function cumpleAno (persona) {
    return{
        ...persona,
        edad: persona.edad +1
    }
}