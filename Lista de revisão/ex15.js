const filmes = [
    {titulo:'De Repente 30', ano: 2004},
    {titulo: 'Homem-Aranha', ano: 2023},
    {titulo: 'Adoraveis Mulheres', ano: 2018},
    {titulo: 'Top Gun: Ases Indomaveis', ano: 1986},
];

filmes.sort((a, b) => a.ano - b.ano);
console.log(filmes);