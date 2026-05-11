const lista = [
  {
    nome: 'José',
    idade: 13
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

//for(let i = 0; i < lista.length; i++) {
  //console.log(lista[i]);
//}

let soma =0;

const somarIdade = (objeto) => {
  soma += objeto.idade
}

lista.forEach(somarIdade);

console.log('Soma: ',soma)