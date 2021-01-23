// Funciones que retornan Valores.//

//Condicionales//
var dami = {
    nombre: 'Dami',
    apellido: 'Pres',
    edad:15,
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
    
    imprimirProfesiones(dami) 
    
    const MAYORIA_DE_EDAD = 18 
    
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

        // Clase 11 arrow Functions//
      
        const MAYOR_DE_EDAD  =({edad})=> edad >= MAYORIA_DE_EDAD  // De esta forma se declara una arrow Function parcialmente igual
                                                        // A la funsion declarada a continuacion de la misma. 
          const ES_MENOR_DE_EDAD = ({edad}) => edad < MAYORIA_DE_EDAD                       

       //const MAYOR_DE_EDAD = function (persona){
           // return persona.edad >= MAYORIA_DE_EDAD}

         function permitirAcceso (persona) {
             if (!ES_MENOR_DE_EDAD(persona)){   
                    console.log('acceso permitido')
             }if (!MAYOR_DE_EDAD(persona)) {
                 console.log('acceso denegado')
             }

         }