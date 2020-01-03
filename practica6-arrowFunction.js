var fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38
}

var tatin = {
    nombre: 'Joaquín',
    apellido: 'Herrera',
    edad: 12
}

const MAYORIA_DE_EDAD = 18

// function esMayorDeEdad (persona){
//     return persona.edad >= mayoriaDeEdad
// }


/*   Primera forma de un arrow function   */
// const esMayorDeEdad = (persona) => {
//     return persona.edad >= mayoriaDeEdad
// }

/*   Segunda forma de un arrow function   */
// const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

/*   Tercera forma de sintetizar una arrow function  */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad (persona){
    console.log(persona.edad)
    if(!esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad}.`)
    } else {
        console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad}`)
    }
}

imprimirSiEsMayorDeEdad(fran)