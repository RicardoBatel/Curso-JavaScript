
//.some() -> retorna true se pelo menos um elemento do array satisfaz a condição,
// caso contrário, retorna false
//.every() -> retorna true se todos os elementos do array satisfazem a condição,
// caso contrário, retorna false

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

const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade >= 10);

console.log('resultadoSome:', resultadoSome);
console.log('resultadoEvery:', resultadoEvery);