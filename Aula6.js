//Trabalhar com a opção Keys do Arrey, transformando um objeto em um Array de keys.

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

const funcaoReduce = (acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: {
      idade: objeto.idade
    }
  }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);
//o resultado do Object.keys é um array, onde cada elemento é uma chave do objeto
// pessoas, ou seja, o nome de cada pessoa.

//console.log(pessoas);
console.log(chaves);

//console.log(Object.keys(lista[0]));
//o resultado do Object.keys é um array, onde cada elemento é uma chave do objeto

