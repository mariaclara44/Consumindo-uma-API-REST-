const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Fone", preco: 120 }
];

const precoMenor = produtos.filter((produtos => produtos.preco < 200));

console.log(precoMenor); 