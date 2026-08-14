const filmes = [
  { id: 1, titulo: "Shrek", ano: 2001 },
  { id: 2, titulo: "Toy Story", ano: 1995 },
  { id: 3, titulo: "Vingadores", ano: 2012 },
  { id: 4, titulo: "Batman", ano: 2008 }
];

const filme = filmes.find(filmes => filmes.id === 4)

console.log(filme);