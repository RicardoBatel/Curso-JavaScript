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

//método reduce, parecido com map, porém ele tem um acumulador, ou seja, ele vai acumulando os resultados da função que é passada para ele, e no final ele retorna o resultado acumulado.

const funcaoReduce = (acc, objeto) => {
  return {
    ...acc,
    [objeto.nome]: {
      idade: objeto.idade
    }
  }
}

const pessoas = lista.reduce(funcaoReduce, {});
//o resultado do reduce é um objeto, onde as chaves são os nomes das pessoas e os valores são objetos com a idade de cada pessoa.

const pessoasArray = lista.reduce((acc, objeto) => {
  acc.push(objeto.idade);
  return acc;

},[]);
//o resultado do reduce é um array, onde cada elemento é a idade de cada pessoa. 

console.log(pessoas);
console.log(pessoas.Gustavo.idade);
console.log(pessoasArray);