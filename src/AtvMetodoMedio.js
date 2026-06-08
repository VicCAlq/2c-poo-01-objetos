/*
  * Exercício 3
  *
  * Copie o personagem do exercício 2, e mude os "pontosDeVida" dele 
  * de "100" para "30".
  * 
  * Após cantar a música no exercício 2, a platéia não gostou nada e moeu
  * o personagem na pancada, reduzindo seus "pontosDeVida".
  *
  * Crie agora um método onde o personagem pode consumir uma poção
  * que ele possua para recuperar sua vida para o valor total.
  *
  * O método deve além de curar os pontos de vida, deve também remover uma 
  * das poções de seu inventário.
  *
  * Lembre-se de exportar o objeto do personagem no final do código.
  */

const copiaPersonagem2 = {
  nome: "Romeu Rômulo",
  classe: "bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro",
  "capa de couro", "chapéu de pena"],
  pontosDeVida: 30,
  moedas: {
    moedasOuro: 20,
    moedasPrata: 43,
    moedasBronze: 125
  },
  pocoes: {
    cura: 7,
    magia: 5
  },
  tocarMusica: function(musica, letra) {

    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
   uma música para trazer ânimo a seus corpos e esperança para seus corações.
   Apresento-lhes a música [${musica}]

      Em 1, 2, 3
   ...
   [${letra}]`)
  },

  consumirPocao: function() {
    if (this.pontosDeVida < 100) {
      this.pontosDeVida = 100,
      this.pocoes.cura - 1
    }
  }
}

export default copiaPersonagem2