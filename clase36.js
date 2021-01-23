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
    .then (function(person){
        console.log(`Hola yo soy ${person.name}`)
})
.catch(onError)
    