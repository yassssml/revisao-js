
let pikachu = 80;
let charmander = 80;

let rodada = 1;


let ataquepikachu = 0;
let ataquecharmander = 0;

// Batalha
while (pikachu > 0 && charmander > 0) {
    console.log('☠️ Rodada ', rodada)

    ataquepikachu = Math.floor(Math.random() * 25)
    ataquecharmander = Math.floor(Math.random() * 18)


    pikachu = pikachu - charmander
    charmander = charmander - pikachu

    console.log('⚡ pikachu deu ', ataquepikachu, 'de dano!');
    console.log('🔥 charmander deu ', ataquecharmander, 'de dano!');


    console.log('❤️ vida de pikachu ', pikachu);
    console.log('❤️ vida de charmander ', charmander);
    console.log('--------------------------------');

    rodada++;
}
if (pikachu <= 0 && charmander <= 0) {
    console.log('🤯 empate! ninguem resistiu')
} else if (pikachu > charmander)
    console.log('⚡ pikachu venceu!')
else
    console.log('🔥 charmander venceu!')