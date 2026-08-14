const produtos = [ 
   {nome: 'Caderno', preco: 40},
   {nome: 'Caneta', preco: 10},
   {nome:'Borracha', preco: 7},
]

const nomes = produtos.map((produto) => produto.nome);

console.log(nomes);

