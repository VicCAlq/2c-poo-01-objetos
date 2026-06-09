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
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],
  pontosDeVida: 30,
  pontosDeMagia: 100,
  moedas: {
    ouro: 20,
    prata: 43,
    bronze: 125
  },
  pocoes: {
    cura: 0, 
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
  },
  comprarPocaoCura: function(quantidade) {
    
    const custoEmPrata = quantidade * 15;
    
    const custoEmBronze = custoEmPrata * 10;
    
    
    let carteiraEmBronze = this.moedas.bronze + (this.moedas.prata * 10) + (this.moedas.ouro * 100);

   
    if (carteiraEmBronze >= custoEmBronze) {
      
      carteiraEmBronze -= custoEmBronze;
      
      
      this.moedas.ouro = Math.floor(carteiraEmBronze / 100);
      carteiraEmBronze = carteiraEmBronze % 100; 
      
      this.moedas.prata = Math.floor(carteiraEmBronze / 10);
      this.moedas.bronze = carteiraEmBronze % 10; 
      
   o
      this.pocoes.cura += quantidade;
      
      console.log(`Compra concluída! Você adquiriu ${quantidade} poções de cura.`);
    } else {
      console.log("Você não tem dinheiro o suficiente, meu caro. Quer fazer um empréstimo?");
    }
  }
};



export default personagem;