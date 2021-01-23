// Funciones que retornan Valores.//

//Condicionales//
var dami = {
    nombre: 'Dami',
    apellido: 'Pres',
    edad:17,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    dj:false,
    guitarrista:false,
    drone:true
    
    }

    var juan = {

        nombre: 'Juan',
        apellido: 'gomez',
        edad: '13'
    }
    
    function imprimirProfesiones (persona){
        console.log(`${persona.nombre} es:`)
    
        if (persona.ingeniero){
            console.log('ingeniero')
        }
    
        if (persona.cocinero) {
            console.log('cocinero')
            
        }else {
            console.log('no es ingeniero')
        }
        if (persona.cantante) {
            console.log('cantante')  
    }
        if (persona.dj) {
        console.log('dj')
    }
        if (persona.guitarrista) {
            console.log('guitarrista')
            
        }
        if (persona.drone) {
            console.log('drone')
            
        }
    
    
    }
    
    //imprimirProfesiones(dami) 
    
    // El resultado seria dami es: Ingeniero , drone//

    //Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. Para ello utilizamos los símbolos >=.
    //Return detiene la ejecución de una función y devuelve el valor de esa función.
    //Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. Las constantes pueden ser declaradas en mayúsculas o minúsculas. 
    //Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.//
    
    const MAYORIA_DE_EDAD = 18 // SE RECOMIENDA DEFINIR CONSTANTES EN ESTE FORMATO (TODO MAYUS SEPARADO POR _)
    
    function mayorDeEdad (persona){
        return persona.edad >= MAYORIA_DE_EDAD
     }
    
    function imprimirEdad (persona) {
    if (mayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de Edad `)
        
    } else {
        console.log(`${persona.nombre} es menor de Edad `)
        
    }
    
    }
    
        imprimirEdad (dami)     

