const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let resposta = '';

  for (let i = 1; i <= 10; i++) {
    resposta += numero + ' X ' + i + ' = ' + (numero * i) + '\n';
    //resposta = `${resposta}${numero} X ${i} = ${numero * i}\n`
  }

  resp.innerText = resposta;
})