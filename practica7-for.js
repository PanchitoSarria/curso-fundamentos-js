let fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    edad: 38,
    peso: 62
}

console.log(`${fran.nombre} pesaba a principio de año ${fran.peso}`)

const AUMENTAR_DE_PESO = persona => persona.peso += 0.2
const ADELGAZAR = persona => persona.peso -= 0.2

for(let i = 1; i <= 365; i++){
    var random = Math.random()

    if (random < 0.25){
        AUMENTAR_DE_PESO(fran)
    } else if (random < 0.5) {
        ADELGAZAR(fran)
    }
}

console.log(`Al final del año${fran.nombre} pesa ${fran.peso.toFixed(1)}kg`)