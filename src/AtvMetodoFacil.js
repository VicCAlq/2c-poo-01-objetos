const personagem = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],
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
  tocarMusica: function(musica, letra) {
    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
uma música para trazer ânimo a seus corpos e esperança para seus corações.
Apresento-lhes a música ${musica}.

Em 1, 2, 3
...
${letra}`);
  }
};

export default personagem;