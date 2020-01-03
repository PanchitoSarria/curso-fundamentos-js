let contador = 0

let random = () => Math.random() > 0.25

do{
    contador ++
} while (!random())

if(contador === 1){
    console.log(`Fui a ver si llovió ${contador} vez.`)
} else {
    console.log(`Fui a ver si llovió ${contador} veces.`)
}