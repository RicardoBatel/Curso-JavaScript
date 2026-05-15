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

//const novaPessoa = lista.find((pessoa) => pessoa.idade > 30);
//a função (pessoa) está recebendo cada um dos objetos da lista, e o find irá retornar somente o primeiro objeto que tiver a idade maior que 30

const buscarPessoa = (pessoa) => pessoa.idade > 30;

const novaPessoa = lista.find(buscarPessoa);
//agora a função buscarPessoa é uma função nomeada, e é passada para o find, o resultado é o mesmo do exemplo anterior, ou seja, irá retornar somente o primeiro objeto que tiver a idade maior que 30.

console.log(novaPessoa);