const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

let resposta = '';
let numContas = 0;
let valorTotal = 0;

frm.addEventListener ('submit', (e) => {
  e.preventDefault();

  const descricaoConta = frm.inConta.value;
  const valorConta = Number(frm.inValor.value);

  numContas++;
  valorTotal += valorConta;

  resposta += descricaoConta + ' - R$: ' + valorConta.toFixed(2) +'\n';

  resp1.innerText = `${resposta}--------------------------`;
  resp2.innerText = `${numContas} conta(s) - Total R$: ${valorTotal.toFixed(2)}`;
})

