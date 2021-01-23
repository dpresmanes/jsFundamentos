var nombre = 'Damian' //Variable Objeto Global//

function imprimirNombreEnMayus (n) { // Dentro de  () definimos variables locales a la funcion. Esta variable puede ser igual a la global//
        n = n.toLocaleUpperCase()
    console.log(n)

}

imprimirNombreEnMayus()

