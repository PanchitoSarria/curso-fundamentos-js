var fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38
}
var mati = {
    nombre: 'Matías',
    apellido: 'Semeniuk',
    edad: 36
}

function imprimirNombreYEdad(objeto){
    var { nombre } = objeto,
        { apellido } = objeto,
        { edad } = objeto

    console.log(`Hola! Me llamo ${nombre} ${apellido} y tengo ${edad} años.`)    
}

imprimirNombreYEdad(fran)
imprimirNombreYEdad(mati)


// Comparaciones

var fran2 = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38
}

fran === fran2
// Esto da false

fran.apellido === fran2.apellido
// Esto da true

