/* Este arquivo contém um exemplo de objeto, com 
  * explicações de cada parte nos comentários */

// Objetos são criados como variáveis comuns
// A sintaxe para criação de um objeto é a abertura de chaves após o =
const meuPapagaio = {
  // Dentro das chaves temos o conteúdo do objeto
  // Este conteúdo é dividido entre propriedades e métodos

  // A sintaxe de uma propriedade é sempre
  // nomeDaPropriedade: valorDaPropriedade,
  // O : substitui o sinal de = neste caso, e a vírgula separa
  // uma propriedade da propriedade seguinte

  // As mesmas regras para nomeação de variáveis se aplicam aqui
  // E as mesmas regras para valores (textos entre áspas, 
  // casa decimal de números é separada por ponto ao invés 
  // de vírgula, listas são criadas com colchetes, etc)
  // também são válidas aqui
  nome: "Trogdor Burninator",
  // Após a definição de toda propriedade ou método, temos vírgula
  apelido: "Troguinho",
  idade: 16,
  cores: ["#306080", "#e0a030", "#8040a0"],
  comidas: ["ração", "larvinhas secas", "couve", "maçã", "banana", "cenoura", "milho"],
  // Objetos podem ter outros objetos dentro, como a lista de remédios abaixo:
  remedios: {
    manha: null,
    tarde: "ômega 3",
    noite: "simeticona",
  },
  // Abaixo temos propriedades indicando como está o papagaio
  fome: true,
  tedio: true,
  sono: false,
  medicado: {
    manha: null,
    tarde: false,
    noite: false,
  },
  // Abaixo temos um método para alimentar o papagaio
  alimentar: function(alimento) {
    // A palavra "this" é a forma que um objeto tem de acessar 
    // valores internos. Abaixo acessamos a lista de comidas permitidas
    if (this.comidas.includes(alimento) === true) {
      // Na linha abaixo, mudamos o valor da propriedade "fome" do papagaio
      this.fome = false
      // Na linha abaixo, this.apelido acessa o apelido do papagaio
      console.log(`${this.apelido} alimentado com ${alimento}.`)
    } else {
      console.log(`Não pode dar ${alimento}, apenas comidas da lista abaixo:`)
      console.log(this.comidas)
    }
  },
  // Tente agora compreender os próximos métodos
  brincar: function() {
    if (this.sono === true) {
      console.log("Deixe o pobrezinho descansar antes de brincar com ele.")
    } else if (this.fome === true) {
      console.log("Não dá pro coitado brincar de barriga vazia.")
    } else {
      this.sono = true
      console.log(`Agora que ${this.apelido} brincou, hora de colocar ele pra nanar.`)
    }
  },
  // O método abaixo é um pouco mais complexo. Leia o código com calma
  // e tente interpretar cada etapa
  medicar: function(horario, remedio) {
    const horarios = ["manha", "tarde", "noite"]

    if (horarios.includes(horario) === false) {
      console.log(`Os horários válidos são apenas ${horarios}.`)
    } else if (this.remedios[horario] !== remedio) {
      console.log(`O remédio da ${horario} não é este, é ${this.remedios[horario]}.`)
    } else {
      // Propriedades de objetos podem ser acessados com a sintaxe
      // para itens de listas, onde ao invés de um número dentro dos
      // colchetes, temos o nome da propriedade
      this.medicado[horario] = true
      console.log(`${this.apelido} está medicado para a ${horario}.`)
    }
  },
  dormir: function() {
    this.fome = true
    this.tedio = true
    this.sono = false
    this.medicado.tarde = false
    this.medicado.noite = false
  }
}

// Para avaliar a atividade, precisamos exportar o objeto criado
export default meuPapagaio

// Experimente o resultado dos console.log e console.table abaixo:
console.log(meuPapagaio)
console.table(meuPapagaio)
console.table(meuPapagaio.remedios)

meuPapagaio.brincar()
meuPapagaio.alimentar("bolacha")
meuPapagaio.alimentar("larvinhas secas")
meuPapagaio.brincar()

meuPapagaio.medicar("tarde", "dipirona")
meuPapagaio.medicar("tarde", "ômega 3")
console.table(meuPapagaio.medicado)
meuPapagaio.medicar("noite", "simeticona")
console.table(meuPapagaio.medicado)

console.table(meuPapagaio)
console.table(meuPapagaio.medicado)

meuPapagaio.dormir()
console.table(meuPapagaio)

