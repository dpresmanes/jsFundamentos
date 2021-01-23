//estructuras de datos inmutables//

const sacha = {
    nombre: 'sacha',
    apellido:'press',
    edad: 28
}

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad+1 
})


