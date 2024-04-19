const frm = document.querySelector('form');
const resp = document.querySelector('pre');
const resp1 = document.querySelector('#outMaiorMedia');
const resp2 = document.querySelector('#outMediaTurma');

const alunos = [];

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const media = (nota1 + nota2) / 2;

  alunos.push({nome, nota1, nota2, media});

  lista = '';

  alunos.forEach((aluno, i) => {
    lista += `Aluno: ${aluno.nome}\n1ª nota: ${aluno.nota1}\n2ª nota: ${aluno.nota2}\nMedia ${aluno.media.toFixed(2)}\n\n`;
  })

  resp.innerText = lista;

  frm.reset();
  frm.inNome.focus();

})

frm.btCalcular.addEventListener('click', () => {

  if (alunos.length == 0) {
    alert('Preencha os campos de informação para prosseguir');
  }

  const mediaAlunos = alunos.map(aux => ((aux.nota1 + aux.nota2) / 2));
  const maiorMediaAluno = mediaAlunos.reduce((a, b) => Math.max(a, b), 0);
  const mediaTurma = mediaAlunos.reduce((soma, media) => ((soma += media)), 0) / mediaAlunos.length;


  resp1.innerText = `${maiorMediaAluno.toFixed(2)}`;
  resp2.innerText = mediaTurma.toFixed(2);
})
