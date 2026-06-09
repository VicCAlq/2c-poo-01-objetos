/*
  * Exercício 1
  *
  * Crie um objeto com o nome de variável "personagem" que contenha 
  * as características abaixo marcadas entre áspas:
  *
  * O "nome" do personagem é "Romeu Rômulo", e possui a classe "bardo".
  * Atualmente o "nivel" dele é de "12", e ele possui como "equipamento"
  * a lista de itens "arco", "violão", "gaita", "flechas de aço", "botas de couro",
  * "capa de couro", "chapéu de pena".
  * Ele tem um total de "100" "pontosDeVida".
  * Ele também tem um total de "100" "pontosDeMagia".
  * Ele tem também algumas "moedas", sendo elas "20" moedas de "ouro", "43" moedas
  * de "prata" e "125" moedas de "bronze".
  * Por fim, ele tem algumas "pocoes", sendo elas "7" de "cura" e "5" de "magia".
  *
  * Valores que forem números devem ser informados sem as áspas.
  *
  * Após criar o objeto, coloque no final do código, fora do objeto, 
  * as palavras "export default" seguido do nome do objeto, 
  * como "export default personagem"
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