//Estructuras Repetitivas: FOR //

//El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

//Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
//Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, y dentro las llaves irán las instrucciones que se deben repetir.

//En este ejemplo la variable i la utilizamos como contador.

var dami = {
    nombre: 'Dami',
    apellido: 'Press',
    edad: 28,
    peso: 81,
}

console.log(`Al inicio del año ${dami.nombre} pesa ${dami.peso} Kg`)
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
// funcion arrow //
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const META = dami.peso - 3
const comeMucho = () =>  Math.random () < 0.3
const realizaDeporte = () => Math.random () < 0.4
var dias = 0



for (var i = 1; i<=DIAS_DEL_ANO; i++) {
    var random = Math.random()
    
    if(random < 0.25) {
        aumentarDePeso(dami)
    } else if (random< 0.5){
        adelgazar(dami)
    }
}

while (dami.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(dami)
    }
    if (realizaDeporte()) {
        adelgazar(dami)
    }  
     dias +=1
}
// Console.log para While//
console.log(`Pasaron ${dias} dias hasta que ${dami.nombre} adelgazo 3kg`)
// console.log para For//
console.log(`Al final del año ${dami.nombre} peso ${dami.peso.toFixed(2)}Kg`)



