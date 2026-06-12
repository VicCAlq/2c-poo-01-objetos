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
    cura: 0,
    magia: 5,
  },

  consumirPocao: function(){
    if(this.pontosDeVida <= 100){
      this.pontosDeVida = 100
      this.pocoes.cura -= 1
    }
    },

  comprarpocao: function(quantidadeDePocoesAdquiridas){
    custoPorPocao = 15 
    custoTotal = custoPorPocao * quantidadeDePocoesAdquiridas

    const 
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