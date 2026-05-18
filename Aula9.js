//.flatMap -> primeiro mapeia cada elemento do array e depois achata o resultado em um novo array

const lista = [
  {
    nome: 'José',
    idade: 13,
    cartoes: ['3244', '5435']
  },
  {
    nome: 'João',
    idade: 42,
    cartoes: ['6789', '0123']
  },
  {
    nome: 'Maria',
    idade: 23,
    cartoes: ['4567', '8901']
  },
  {
    nome: 'Gabriela',
    idade: 25,
    cartoes: ['2345', '6789']
  },
  {
    nome: 'Fernanda',
    idade: 65,
    cartoes: ['0123', '4567']
  },
  {
    nome: 'André',
    idade: 69,
    cartoes: ['8901', '2345']
  },
  {
    nome: 'Heitor',
    idade: 32,
    cartoes: ['6789', '0123']
  },{
    nome: 'Gustavo',
    idade: 64,
    cartoes: ['4567', '8901']
  },{
    nome: 'Sandra',
    idade: 33,
    cartoes: ['2345', '6789']
  },
]

const resultado = lista.flatMap((objeto) => objeto.cartoes);

console.log('resultado:', resultado);