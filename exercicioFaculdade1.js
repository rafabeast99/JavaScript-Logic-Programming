const frm = document.querySelector('form');
const respLista = document.querySelector('pre')
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

const idades = [];

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const idade = Number(frm.inIdade.value);

  idades.push(idade);
  let numIdades = 0;

  for (const age of idades) {
    numIdades++;
  }

  /*for (let i = 0; i < idades.length; i++) {
    numIdades++
  }
  */
  const soma = idades.reduce((sum, age) => sum += age, 0);
  const maiorIdade = idades.reduce((a, b) => Math.max(a, b), 0);


  resp1.innerText = numIdades;
  resp2.innerText = soma;
  resp3.innerText = maiorIdade;

  frm.reset();
  frm.inIdade.focus();
})

frm.btListar.addEventListener('click', () => {
  let lista = '';

  idades.forEach((idade, i) => {
    lista += `${i + 1}º registro: ${idade}\n`;
  })

  respLista.innerText = lista;
})