var dami = {
    nombre: 'Dami',
    apellido: 'press',
    altura: '1.72',
    cantdadDeLibros: '80'
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Perez',
    altura: '1.85',
    cantdadDeLibros: '130'

}

var julieta = {
    nombre: 'Julieta',
    apellido: 'Gomez',
    altura: '1.76',
    cantdadDeLibros: '93'

}

var nico = {
    nombre: 'Nico',
    apellido: 'Gonzalez',
    altura: '1.73',
    cantdadDeLibros: '45'

}

//const esAlta = (persona ) => {
 //   return persona.altura > 1.8}
 
 const esAlta = ({altura}) => personas.altura > 1.8
 
 const esBaja = ({altura}) => personas.altura < 1.8

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
 var acum = 0


  //Reducir un array a un valor
 //El método reduce() nos permite reducir, mediante una función
 //que se aplica a cada uno de los elemento del array, todos los elementos de dicho array, a un valor único.
 
 //Podemos Utilizar For como se muestra a continuacion.
 //for (var i=0; i= personas.length; i++) {
 //acum = acum + personas[i].cantdadDeLibros} 

 // O podemos Utilicar Reduce() como se muestra en el siguiente ejemplo.

 const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros
 var totalDeLibros = personas.reduce(reducer,0)
 console.log(`en total todos tienen ${acum} libros`)

// console.log(personasAltas)

 //console.log(personasBajas)
 //console.log(personasCms)
