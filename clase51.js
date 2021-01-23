function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo ('guey')
const saludoColombiano = crearSaludo ('amigo')

saludoArgentino('dami')
saludoMexicano('pedro')
saludoColombiano('juan')