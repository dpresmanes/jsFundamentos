//Filtrar Array//

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

//const esAlta = (persona ) => {
 //   return persona.altura > 1.8}
 
 const esAlta = ({altura}) => altura > 1.8
 
 const esBaja = ({altura}) => altura < 1.8

 //Funcion Map 18 //
 const pasarAlturaACms = personas => ({
        ...personas,
            altura: personas.altura * 100  
})

 var personas = [dami, pedro, julieta, nico]

 //En esta clase veremos cómo transformar un array. El método map() itera sobre los elementos
 // de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.
 var personasCms = personas.map(pasarAlturaACms)
 
 
 var personasAltas = personas.filter(esAlta)
 var personasBajas = personas.filter(esBaja)
 
 
 console.log(personasAltas)
 console.log(personasBajas)
 console.log(personasCms)
 