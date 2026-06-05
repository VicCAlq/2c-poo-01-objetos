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

 const Personagem = {
    nome: 'Romeu Rômulo',
    nivel: 12,
    classe: 'bardo',
    equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro", "capa de couro", "chapéu de pena"],
    pontosDeVida: 100,
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
    }
  }

console.log(copiaDoPersonagem)
copiaDoPersonagem.tocarMusica('Blue Bird', 'hishou taitara\n modoranai to itte\n mezashita no wa\n aoi aoi ano sora\n kanashimi wa mada oboerarezu\n setsunasa wa ima tsukami hajimetaanata\n e to daku kono kanjou mo\n ima kotoba ni kawatte iku\n michi naru sekai no\n yuumei kara mezamete\n kono hane wo hiroge tobitatsu\n hishou taitara\n modoranai to itte\n mezashita no wa\n shiroi shiroi ano kumo\n tsukinuketara\n mitsukaru to shitte\n furikiru hodo\n aoi aoi ano sora\n aoi aoi ano sora\n aoi aoi ano sora')
export default Personagem;
