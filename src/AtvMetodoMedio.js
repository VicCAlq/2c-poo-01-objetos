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

  const personagem = {
  nome: "Romeu Rômulo",
  classe: "Bardo",
  nivel: 12,
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],
  pontosDeVida: 30,
  pontosDeMagia: 100,
  moedas: {
    bronze: 125,
    prata: 43,
    ouro: 20,
  },
  pocoes: {
    cura: 7,
    magia: 5,
  },
  consumirPocao: function(){
    if(this.pontosDeVida <= 100){
      this.pontosDeVida = 100
      this.pocoes.cura -= 1
    }
    },

  tocarMusica: function(nome,letra){
    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
   uma música para trazer ânimo a seus corpos e esperança para seus corações.
   Apresento-lhes a música ${[nome]}.
  
   Em 1, 2, 3
   ...
  ${[letra]}
   `)
  }
  }

 console.log(personagem.tocarMusica('até que o senhor venha', `Oh, se você rasgar o céu Apenas mais uma vezOh, se você descer e fizer Teus grandes feitos de novo Como nos tempos passados Mostra teu braço forte oh, grande rei Mostra a essa geração
Teus prodígios e sinais
Vem mais uma vez e faz tudo novo
Vem mais uma vez e agita todo o meu ser
Faz a eternidade se alinhar com o natural
E da terra, nós que somos pó clamamos
Aviva-nos, aviva-nos, aviva-nos senhor
Fere o meu coração
Com uma ferida de fome por ti
Fere o meu coração
Com uma ferida de sede por ti
Ensina-me a clamar e a suplicar
Até que o senhor venha
Fere o meu coração
Com uma ferida de fome por ti
Fere o meu coração
Com uma ferida de sede por ti
Ensina-me a clamar e a suplicar
Até que o senhor venha
Até que o senhor venha
Eu vou clamar
Até que o senhor venha
Eu não vou descansar
Até que o senhor venha
Eu vou gastar a minha vida
Diante do teu altar, Deus!
Diante do teu altar!
Até que o senhor venha
Eu vou clamar
Até que o senhor venha
Eu não vou descansar
Até que o senhor venha
Eu vou gastar a minha vida
Diante do teu altar, Deus!
Diante do teu altar!
Fere o meu coração
Com uma ferida de fome por ti
Fere o meu coração
Com uma ferida de sede por ti, Deus
Ensina-me a clamar e a suplicar
Até que o senhor venha
Até que o senhor venha
Eu vou clamar
Até que o senhor venha
Eu não vou descansar
Até que o senhor venha
Eu vou gastar a minha vida
Diante do teu altar, Deus!
Diante do teu altar!
Até que o senhor venha
Eu vou clamar
Até que o senhor venha
Eu não vou descansar
Até que o senhor venha
Eu vou gastar a minha vida
Diante do teu altar, Deus!
Diante do teu altar! `))

export default personagem();
