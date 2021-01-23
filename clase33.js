const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1 )}`
const opts = {crossDomain: true}
const onPeopleResponse = function (person){
    console.log(`Hola yo soy ${person.name}`)
}



function obtenerPersonaje(id){
    const url= `${API_URL}${PEOPLE_URL.replace(':id',1 )}`
    $.get (url, opts, onPeopleResponse )
}