var sacha = {
    nombre:'damian',
    apellido:'presmanes',
    edad: 28
}

function esMayorDeEdad(persona){
    let mensaje
    const MAYORIA_DE_EDAD = 18
if (persona.edad > MAYORIA_DE_EDAD){
     mensaje = 'Es mayor de edad!'
}else{
     mensaje = 'Es menor de edad'
}
 console.log(mensaje)
}

//esMayorDeEdad(sacha)

for(var i = 0; i > 10; i++){
    console.log(i)
}