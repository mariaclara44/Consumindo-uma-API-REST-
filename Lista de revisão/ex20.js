const filmes = [
  { id: 1, titulo: "Shrek", ano: 2001, genero: "Comédia" },
  { id: 2, titulo: "Toy Story", ano: 1995, genero: "Animação" },
  { id: 3, titulo: "Vingadores", ano: 2012, genero: "Ação" },
  { id: 4, titulo: "Homem-Aranha", ano: 2002, genero: "Ação" },
  { id: 5, titulo: "Batman", ano: 2008, genero: "Ação" },
  { id: 6, titulo: "Frozen", ano: 2013, genero: "Animação" }
];

// a) Use filter() para mostrar somente os filmes de "Ação".
const filmesAcao = filmes.filter(filmes => filmes.genero === 'Ação' )

//b) Use filter() para mostrar somente os filmes lançados depois de 2000.
const filmesDepois2000 = filmes.filter(filmes => filmes.ano >= 2000 )

//c) Use sort() para ordenar os filmes pelo ano, do mais antigo para o mais recente.
filmes.sort((a, b) => a.ano - b.ano);

//d) Use map() para mostrar somente os títulos.
const titulos = filmes.map((filmes) => filmes.titulo);

// e) Use find() para encontrar o filme de id 4.
const filme = filmes.find(filmes => filmes.id === 4)

//f) Crie uma solução que faça:
const resultado = filmes.filter(filme=> filme.genero === "Ação").sort((a, b) => a.ano - b.ano).map(filme => filme.titulo);

console.log(filmesAcao);
console.log(filmesDepois2000);
console.log(filmes);
console.log(titulos);
console.log(filme);
console.log(resultado);