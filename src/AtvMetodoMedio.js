const personagem = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],
  pontosDeVida: 30,
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
    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso\numa música para trazer ânimo a seus corpos e esperança para seus corações.\nApresento-lhes a música ${musica}.\n\nEm 1, 2, 3\n...\n${letra}`);
  },
  tomarPocaoCura: function() {
    
    if (this.pocoes.cura > 0) {
      this.pocoes.cura -= 1; 
      this.pontosDeVida = 100; 
      console.log("Poção consumida! A vida de Romeu Rômulo voltou para 100.");
    } else {
      console.log("Você não possui poções de cura.");
    }
  }
};

export default personagem;