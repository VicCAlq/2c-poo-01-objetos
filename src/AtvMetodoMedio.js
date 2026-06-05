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
    nome: 'Romeu Rômulo',
    nivel: 12,
    classe: 'bardo',
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
    tocarMusica: function(nome, letra){
        console.log(
        `Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
        uma música para trazer ânimo a seus corpos e esperança para seus corações.
        Apresento-lhes a música [${nome}].

        Em 1, 2, 3

        ${letra}`) 
    },
    consumirPorcao: function(){

        if(this.pontosDeVida < 100) {
            this.pontosDeVida = 100;
            
            this.pocoes.cura = 6
        }

    }
}

console.log(personagem)
personagem.tocarMusica('Blue Bird', 'hishou taitara\n modoranai to itte\n mezashita no wa\n aoi aoi ano sora\n kanashimi wa mada oboerarezu\n setsunasa wa ima tsukami hajimetaanata\n e to daku kono kanjou mo\n ima kotoba ni kawatte iku\n michi naru sekai no\n yuumei kara mezamete\n kono hane wo hiroge tobitatsu\n hishou taitara\n modoranai to itte\n mezashita no wa\n shiroi shiroi ano kumo\n tsukinuketara\n mitsukaru to shitte\n furikiru hodo\n aoi aoi ano sora\n aoi aoi ano sora\n aoi aoi ano sora')
personagem.consumirPorcao()
