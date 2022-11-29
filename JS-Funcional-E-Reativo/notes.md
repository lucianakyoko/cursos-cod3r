# JavaScript Functional e Reativo - Pense como um desenvolvedor JavaScript

## Paradigmas
 - Functional (1957)
 - Procedural (1968)
 - Orientação à Objetos (1980/90)

## Código Declarativo vs Imperativo
| Imperativo | Declarativo | 
| --- | --- | 
| Foco no Fluxo | Foco na lógica | 
| Estados Mutáveis | Imutabilidade | 
| Como | O que | 
| Maior quantidade de código | Menor quantidade de código | 
| Baixo nível de escalabilidade | Alto nível de escalabilidade | 
| Mais conhecido | Menos conhecido | 
| Mais explícito | Menos explícito | 

Exemplo de código Imperativo:
```
  const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

  function media(notas) {
    let total = 0
    for(let i = 0; i < notas.length; i++) {
      totaçl += notas[1]
    }
    return total / notas.length
  }

  const mediaTurma = media(notas);
  console.log(`Média é ${mediaTurma}`)
```

Exemplo de código Declarativo:
```
  const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

  const somar = (a, b) => a + b
  const dividir = (a, b) => a / b

  const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
  )

  console.log(`Média é ${mediaTurma}`)
```

## Paradigma Funcional
Dentro do paradigma funcional, as funções são muito importantes.

**First Class Functions ou First Class Citizens:**
As funções são tratadas como valores.

Declaração Simples:
```
  function dobro(x) {
    return x * 2
  }

  dobro(20);
```

Funções são valores:
```
  const dobro = function(x) {
    return x * 2
  }

  dobro(20)
```

Composição de Funções:
```
  const exagerado = composicao(
    gritar, //É uma função
    enfatizar, //É uma função
  )

  //exagerado também é uma função
  exagerado('PARA')
```

Exemplo: Alunos Aprovados (versão Procedural/ Imperativa):
```
  const alunos = [/*vários alunos...*/]
  const aprovados = []

  for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota >= 7) {
      aprovados.push(alunos[i])
    }
  }
  console.log(aprovados)
```

Exemplo: Alunos Aprovados (versão Funcional/ Declarativa)
```
  const alunos = [/*varios alunos*/]
  const estaAprovado = aluno => aluno.nota >= 7

  const aprovados = alunos.filter(estaAprovado)
  console.log(aprovados)
```

**Imutabilidade:**
 A grande culpada: Memória
  - Programação Funcional foi inventada em 1957;
    - Antes da Programação Estruturada
    - Antes da Orientação a Objetos
  - Memória era muito caro para que fosse viável

A imutabilidade é fundamental nop paradigma funcional: Pode esquecer tudo, menos:
  - mutabilidade isolada
  - imutabilidade compartilhada
