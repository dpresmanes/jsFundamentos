//Cambiando de contexto llamando a una funcion//
//Quien es THIS?

const sacha = {
    nombre: 'Damian',
    apellido: 'Presmanes'
}

const jess = {
    nombre: 'JEsi',
    apellido: 'Cumbiera'
}
function saludar (saludo = 'hola'){
    console.log(`hola, mi nombre es ${this.nombre}`)
}

// const saludarASacha = saludar.bind(sacha)
// const saludarAYesica = saludar.bind(jess)

// setTimeout(saludar.bind(sacha,'Hola che'),1000)

//saludar.call(sacha,'hola che')

saludar.apply(sacha, ['Hola che'])