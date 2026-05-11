
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

const converterObjeto = (objeto) => {
  return {
    ...objeto,
    idade: `${objeto.nome} + ${objeto.idade}`
  }
}

console.log(lista.map(converterObjeto));