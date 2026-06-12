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
		console.log(`
	Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
	uma música para trazer ânimo a seus corpos e esperança para seus corações.
	Apresento-lhes a música ${musica}.

	Em 1, 2, 3
	...
	${letra}`)
	},
	consumirPocaoCura: function() {
		if (this.pocoes.cura == 0)
			return console.log("Não é possível se curar sem poções de cura!")

		this.pocoes.cura--
		this.pontosDeVida = 100
	},
	comprarPocoesCura: function(quantidade) {
		const precoPocao = 15
		let custoTotal = precoPocao * quantidade
		let conseguiu = false

		if (custoTotal <= this.moedas.prata) {
			this.moedas.prata -= custoTotal
			conseguiu = true
		} else if (10 * custoTotal <= this.moedas.bronze) {
			this.moedas.bronze -= custoTotal * 10
			conseguiu = true
		} else if (parseInt(custoTotal / 10) <= this.moedas.ouro) {
			const decremento = parseInt(custoTotal / 10)
			const resto = custoTotal - decremento * 10
			this.moedas.ouro -= decremento

			if (resto == 0)
				conseguiu = true
			else if (resto <= this.moedas.prata) {
				this.moedas.prata -= resto
				conseguiu = true
			} else if (resto <= this.moedas.bronze)
			{
				this.moedas.bronze -= resto * 10
				conseguiu = true
			}
		}

		if (!conseguiu) {
			console.log("Você não tem dinheiro o suficiente, meu caro. Quer fazer um empréstimo?")
			return
		}

		this.pocoes.cura += quantidade
	}
}

export default personagem
