const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1 )}`
const opts = {crossDomain: true}

function obtenerPersonaje(id){
    return new Promise((resolve, reject)=>{
        const url= `${API_URL}${PEOPLE_URL.replace(':id',id )}`

     $
     .get (url, opts,function(data){
         resolve(data)

     })    
     .fail(() => reject(id))

    })  
}

function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje (1) 
    .then (person1 => {
        console.log(`Hola yo soy ${person1.name}`)
        return obtenerPersonaje(2)
    })
    .then (person2 => {
        console.log(`Hola yo soy ${person2.name}`)
        return obtenerPersonaje(3)
    })
    .then (person3 => {
        console.log(`Hola yo soy ${person3.name}`)
        return obtenerPersonaje(4)
    })
    .then (person4 => {
        console.log(`Hola yo soy ${person4.name}`)
        return obtenerPersonaje(5)
    })
    .then (person5 => {
        console.log(`Hola yo soy ${person5.name}`)
        return obtenerPersonaje(6)
    })
.catch(onError)
    