/*
  * Exercício 2
  *
  * Copie o personagem do exercício 1, e adicione nele um método chamado
  * "tocarMusica", que recebe o nome de uma música e a letra desta música.
  *
  * Ao ser chamado, o personagem deve exibir o texto abaixo, substituindo
  * os valores entre colchetes pelos valores do nome da música e sua letra.
  *
  * "
  * Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
  * uma música para trazer ânimo a seus corpos e esperança para seus corações.
  * Apresento-lhes a música [musica].
  *
  * Em 1, 2, 3
  * ...
  * [letra]
  * "
  *
  * Lembre-se de exportar o objeto do personagem no final do código.
  */

const personagem ={
    nome: "romeu romulo",
    classe: "bardo",
    nivel: 12,
    equipamentos: ["arco", "violão", "gaita", "flechas de aço",
                   "botas de couro", "capa de couro", "chapéu de pena" ],
     pontosDeVida: 100, 
     pontosDeMagia: 100,

  moedas: {
    ouro: 20,
    prata: 43,
    bronze: 125
  },
  pocoes: {
    cura: 7,
    magia: 5
  },
   tocarMusica(musica, letra) {
    console.log(`
Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
uma música para trazer ânimo a seus corpos e esperança para seus corações.
Apresento-lhes a música ${musica}.

Em 1, 2, 3... ${letra}  `);
  }
};
personagem.tocarMusica(
  "misery business",
  "Im in the business of misery lets take it from the top Shes got a body like an hourglass its ticking like a clock Its a matter of time before we all run out When I thought he was mine she caught him by the mouth")

  console.log(personagem.tocarMusica)

  export default personagem;
