//Condicionales//
var dami = {
nombre: 'Dami',
apellido: 'Pres',
edad:28,
ingeniero:true,
cocinero:false,
cantante:false,
dj:false,
guitarrista:false,
drone:true

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

// El resultado seria dami es: Ingeniero , drone//

//Reto resuelto//
function imprimirEdad (persona) {
console.log(`${nombre} es: `)

if (persona.edad>=18) {
    console.log('Mayor de edad')
    
} else {
    console.log('Menor de edad')
    
}

}

    imprimirEdad (dami)                           




