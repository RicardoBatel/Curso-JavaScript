// Sort, é uma função de ordenação, onde podemos passar uma função de comparação,
//  para ordenar nosso objeto de acordo com a idade, ou seja, do mais novo para o
//  mais velho.

const lista = [
  {
    nome: 'José',
    idade: 13,
    exibir: true
  },
  {
    nome: 'João',
    idade: 42
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Gabriela',
    idade: 25
  },
  {
    nome: 'Fernanda',
    idade: 65
  },
  {
    nome: 'André',
    idade: 69
  },
  {
    nome: 'Heitor',
    idade: 32
  },{
    nome: 'Gustavo',
    idade: 64
  },{
    nome: 'Sandra',
    idade: 33
  },
]

lista.sort( (a, b) => {
  if (a.idade < b.idade) {
    return -1;
  }
  if (a.idade > b.idade) {
    return 1;
  }
  return 0;
});


//o parametro a é o primeiro elemento do array, e o parametro b é o segundo elemento do array, ou seja, a função de comparação é chamada para cada par de elementos do array, e retorna um valor negativo, zero ou positivo, dependendo da ordem dos elementos.

console.log(lista)

const lista2 = [
  {
    nome: 'José',
    idade: 13,
    exibir: true
  },
  {
    nome: 'João',
    idade: 42
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Gabriela',
    idade: 25
  },
  {
    nome: 'Fernanda',
    idade: 65
  },
  {
    nome: 'André',
    idade: 69
  },
  {
    nome: 'Heitor',
    idade: 32
  },{
    nome: 'Gustavo',
    idade: 64
  },{
    nome: 'Sandra',
    idade: 33
  },
]

lista2.sort((a, b) => {
  if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
    return -1;
  }
  if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
    return 1;
  }
  return 0;
});

console.log(lista2)
