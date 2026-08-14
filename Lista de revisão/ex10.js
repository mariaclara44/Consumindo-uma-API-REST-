const filmes = [
    {titulo:'De Repente 30', genero: 'Comedia Romantica'},
    {titulo: 'Homem-Aranha', genero: 'Ação'},
    {titulo: 'Adoraveis Mulheres', genero: 'Romance' },
    {titulo: 'Top Gun: Ases Indomaveis', genero: 'Ação'},
];

const filmesAcao = filmes.filter(filmes => filmes.genero === 'Ação' )

console.log(filmesAcao);
