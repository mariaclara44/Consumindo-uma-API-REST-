const produtos = [
  { id: 1, nome: "Mouse", preco: 80 },
  { id: 2, nome: "Teclado", preco: 150 },
  { id: 3, nome: "Monitor", preco: 900 },
  { id: 4, nome: "Fone", preco: 120 },
  { id: 5, nome: "Webcam", preco: 200 }
];

//a) Use filter() para selecionar produtos com preço menor que 200.
const precoMenor = produtos.filter((produtos => produtos.preco < 200));

//b) Use sort() para ordenar esses produtos do mais barato para o mais caro.
produtos.sort((a, b) => a.preco - b.preco);

//c) Use map() para mostrar somente os nomes dos produtos.
const nomes = produtos.map((produto) => produto.nome);

//d) Use find() para encontrar o produto de id 5.
const produto = produtos.find(produtos => produtos.id === 5)


console.log(precoMenor); 
console.log(produtos); 
console.log(nomes);
console.log(produto);