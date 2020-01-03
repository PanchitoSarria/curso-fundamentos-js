var fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38
}

function imprimirSiEsMayorDeEdad (persona){
    var { edad } = persona,
        {nombre} = persona

    if (edad >= 18){
        console.log(`${nombre} es mayor de edad, tiene ${edad} años`)
    } else {
        console.log(`${nombre} es menor de edad, tiene ${edad} años`)
    }
}

imprimirSiEsMayorDeEdad(fran)