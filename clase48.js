function diasEntreFechas(fecha1,fecha2){
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = math.abs(fecha1 - fecha2)

    return math.floor(diferencia / unDIa)
}

const hoy = new Date()
const nacimiento = new Date(1990,7,12)
