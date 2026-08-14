const alunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" },
  { id: 3, nome: "Bruno" },
  { id: 4, nome: "Eduardo" }
];

const aluno = alunos.find(alunos => alunos.id === 3)

console.log(aluno);