const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1 )}`
const opts = {crossDomain: true}

function obtenerPersonaje(id, callback){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',id )}`
    $
     .get (url, opts,callback)
     .fail( () => {
        console.log(`sucedio un error no se pude obtener el personaje ${id}`)
    }) 

    
}

obtenerPersonaje (1,function (personaje) {
    console.log(`Hola yo soy ${person.name}`)
    obtenerPersonaje(2,function (personaje){
        console.log(`Hola yo soy ${person.name}`)
        obtenerPersonaje(3,function (personaje){
            console.log(`Hola yo soy ${person.name}`)
            obtenerPersonaje(4,function(personaje){
                console.log(`Hola yo soy ${person.name}`)
                obtenerPersonaje(5,function(personaje){
                    console.log(`Hola yo soy ${person.name}`)
                    obtenerPersonaje(6,function(personaje){
                        console.log(`Hola yo soy ${person.name}`)

                    })
               })
            })
        })
    })
})