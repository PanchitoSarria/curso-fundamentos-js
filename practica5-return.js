let fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38
}

let mati = {
    nombre: 'Matías',
    apellido: 'Semeniuk',
    edad: 36
}

const MAYOR_DE_EDAD = 18

function mayorOMenorDeEdad (persona){
    return persona.edad >= 18
}

function imprimirSiEsMayorDeEdad (persona){
    if(mayorOMenorDeEdad){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(fran)