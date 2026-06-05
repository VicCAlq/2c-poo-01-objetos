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
  equipamento: ["arco", "violão", "gaita", "flechas de aço", "botas de couro",
  "capa de couro", "chapéu de pena"],
  pontosDeVida: 100,
  pontosDeMagia: 100,
  moedas: {
    ouro: 20,
    prata: 43,
    bronze: 125
  },
  pocoes: {
    cura: 7,
    magia: 5,
  },
  tocarMusica: function() {
    console.log(`Senhoras e senhores, gostaria de oferecer a vocês neste dia tempestuoso
    uma música para trazer ânimo a seus corpos e esperança para seus corações.
    Apresento-lhes a música [Evil J0rdan].
    
    Em 1, 2, 3
    ...
    [First, I go whip out the boat, no, I can't hit on no brakes
My life is out of control, I'm tellin' you, nobody safe
I've been livin' my life limbo, my ice, it came with a tray
I'm so high, I gotta hide my face, this not a rockstar phase
I'm a emo thug in my phase
Syrup, syrup, syrup, syrup, tell her to go change
Monkey nuts on me, baby, I got on two chains
Roll another blunt and I might motherfuckin' faint
Spin on the block, have a pussy nigga stained
I just put on my boots, I ain't worried 'bout no rain
Put a nigga down, Channel 2 front page
You was just askin' for some change, now you changed?
Yeah, I told you, yeah, about that money, shit get strange, uh
Fully-loaded Jag, hold up, baby, Jordan paid
I put duct tape on my switch, perfect aim
They can't put me in no genre, baby, 'cause I changed the game
We fuckin' on the same ho, but we not the same
Disrespect the 5, I put your ass in the food chain (Swamp Izzo)
Bitch keep callin' my phone, she sayin' Ms. Jackson goin' through her brain (Carti)
We was just outside dancin', movin' off molly, feelin' insane (he's comin')
I fucked the bitch so nasty, we go Sephora, yeah, then we go PINK
She not so fuckin' toxic, and she care 'bout what I think
She's nothin' like no other bitches, she care 'bout what I drink
I think she's a fling
I think she's a playmaker, she should be on my team
She should get her a ring
Shit, it can't be me, but she can be on the team
Diamonds, they come out the water, my sock, it come with a rink
The Wraith came with the chauffeur, the chauffeur ready to take me
I am the music]`)
  }
}
console.log(personagem.tocarMusica())
