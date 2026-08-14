const produtos = [ 
   {id: 1, nome: 'Caderno', preco: 40},
   {id: 2, nome: 'Caneta', preco: 10},
   {id: 3, nome:'Borracha', preco: 7},
]

const produto = produtos.find(produtos => produtos.id === 2)

console.log(produto);