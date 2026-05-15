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

//const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20);
//a função (pessoa) está recebendo cada um dos objetos da lista, e o filter irá retornar somente os objetos que tiverem a idade maior que 20
//(pessoa) é uma função anonima, ou seja, não tem nome, e é passada diretamente para o filter

const filtrarPessoa = (pessoa) => pessoa.idade > 20;

const listaFiltrada = lista.filter(filtrarPessoa); 
//agora a função filtrarPessoa é uma função nomeada, e é passada para o filter, o resultado é o mesmo do exemplo anterior, ou seja, irá retornar somente os objetos que tiverem a idade maior que 20.

console.log(lista);

console.log(listaFiltrada);