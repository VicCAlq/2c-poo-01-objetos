Data de atualização: Dia 25/6/2026 às 14:45 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| /AtvMetodoComplicado.test.js | ❌ | ❌ | ❌ | Cannot convert undefined or null to object |
| /AtvMetodoFacil.test.js | ❌ | ❌ | ❌ | Parse failure: Parse failed with 1 error:
Expected `,` or `}` but found `Identifier`
43: 
44: }
45:   personagem.tocarMusica("meu bem querer" meu bem querer meu encato ) 
      ^
46:   
47: }
23: import personagem from "/src/AtvObjeto.js";
24: 
25: const personagem = {
                       ^
26:     nome: "Romeu Rômulo", 
27:     classe: "bardo",
At file: /src/AtvMetodoFacil.js:45:2 |
| AtvMetodoMedio | O personagem possui o método de usar poção: | ✅ | ✅ | Sem erros |
| AtvMetodoMedio | Testando o método tomarPocao do personagem: | ✅ | ❌ | Error: O método tomarPocao do personagem não restaurou os pontos de vida para 100 |
| /AtvObjeto.test.js | ❌ | ❌ | ❌ | {(intermediate value)(intermediate value)(intermediate value)(intermediate value)(intermediate value)(intermediate value)(intermediate value)(intermediate value)} is not a function |
