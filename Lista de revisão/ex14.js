const produtos = [ 
   {nome: 'Caderno', preco: 40},
   {nome: 'Caneta', preco: 10},
   {nome:'Borracha', preco: 7},
]

produtos.sort((a, b) => a.preco - b.preco);

console.log(produtos);