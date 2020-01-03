let fran = {
    nombre: 'Francisco',
    apellido: 'Sarría',
    peso: 64
}

let dias = 0

const META = fran.peso - 3

const subeDePeso = persona => persona.peso += 0.3
const adelgaza = persona => persona.peso -= 0.4

let DIAS_SUBE = () => Math.random() > 0.3
let DIAS_BAJA = () => Math.random() > 0.4

while (fran.peso > META){
    // debugger

    if(DIAS_SUBE()){
        subeDePeso(fran)
    }
    if (DIAS_BAJA()){
        adelgaza(fran)
    }

    dias ++
}

console.log(`Le tomó ${dias} días bajar a ${fran.peso.toFixed(2)}kg`)