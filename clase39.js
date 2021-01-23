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

async function obtenerPersonajes() {
    var ids = [1,2,3,4,5,6]
    var promesas = ids.map(id => obtenerPersonaje(id))
    
    try {
        var person = await Promise.all(promesas)
        console.log(person)
    } catch (id) {
      onError(id)
        
    }
}

function onError(id) {
    console.log(`sucedio un error al obtener el personaje ${id}`)
}


obtenerPersonajes()