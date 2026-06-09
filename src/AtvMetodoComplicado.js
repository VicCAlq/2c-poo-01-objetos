/*
  * Exercício 4
  *
  * Copie o personagem do exercício 3 para esta questão, e mude a
  * quantidade de poções de cura do personagem para 0.
  * 
  * Após tentar sua performance em 8 vilarejos diferentes, em quase
  * todos ele apanhou, e terminou gastanto todas as suas poções de cura
  * para não partir desta para uma melhor. Agora ele precisa comprar mais
  * poções de cura.
  *
  * Crie um método onde o personagem gasta parte de seu dinheiro para
  * comprar poções de cura. Cada poção de cura custa 15 moedas de prata.
  * Este método recebe como argumento a quantidade de poções compradas.
  *
  * A relação entre cada dinheiro:
  * 10 moedas de bronze = 1 moeda de prata
  * 10 moedas de prata = 1 moeda de ouro
  *
  * O método deve fazer a conversão entre moedas caso não haja o suficiente
  * da moeda adequada, e descontar o valor das poções do dinheiro do personagem.
  *
  * Exemplo:
  * ouro = 3 moedas
  * prata = 34 moedas
  * bronze = 20 moedas
  *
  * poções compradas = 4
  * Valor total das poções = 60 moedas de prata
  * Converta 3 moedas de ouro para 30 moedas de prata, para um total de
  * 64 moedas de prata, e subtraia o valor das 4 poções das moedas
  * de prata do personagem. Após isso, adicione as poções compradas na lista
  * de poções do personagem.
  *
  * Caso o personagem não tenha dinheiro suficiente para comprar a 
  * quantidade informada de poções, o método deve imprimir o texto
  * "Você não tem dinheiro o suficiente, meu caro. Quer fazer um empréstimo?"
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