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

const personagem = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro",
  "capa de couro", "chapéu de pena"],
  pontosDeVida: 100,
  pontosDeMagia: 100,
  moedas: {
    ouro: 20,
    prata: 43,
    bronze: 125
  },
  pocoes: {
    cura: 7,
    magia: 5,
  },
  tocarMusica: function(musica, letra) {
    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
    uma música para trazer ânimo a seus corpos e esperança para seus corações.
    Apresento-lhes a música ${musica}.
    
    Em 1, 2, 3
    ...
    ${letra}`)
  }
}
personagem.tocarMusica("lágrimas no celular",
  `Eu fiz um show lotar e me senti sozinho
  Eles esquecem que sou o link só no palco
  Se me trombar vou te dar meu melhor sorriso
  Chegar em casa e me afundar no álcool
  Não é que meu sorriso não seja sincero
  Mas é que seu elogio também não foi
  Conhece o link mas esquece do Kalledy
  A cinco anos você nem diria um oi
  Eu vou te traumatizar igual quem me traumatizou
  Eu vou te amar igual seu pai nunca te amou
  Balãozada a noite toda eles acham que eu tô no Rio
  Se apegou porque cê quis
  Tu sabe é os garoto vadio
  É paia te perder quando eu posso te ter
  Mas não tem problema
  Tu vai achar alguém melhor
  Eu te vi de longe e percebi
  Eu não era certo pra você
  Eu não sou certo nem pra mim
  Lágrimas no meu celular`)


console.log(personagem.tocarMusica)