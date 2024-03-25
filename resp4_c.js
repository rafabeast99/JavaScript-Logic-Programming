const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  let troco;

  switch (valor) {
    case 1:
      resp1.innerText = `Tempo: 30min`;
      break
    case 1.75:
      resp1.innerText = `Tempo: 60min`;
      break
    case 3:
      resp1.innerText = `Tempo: 120min`;
      break
    default:
      if (1 < valor && valor < 1.75) {
        troco = valor - 1;
        resp1.innerText = `Tempo: 30min`;

      }
      else if (1.75 < valor && valor < 3) {
        troco = valor - 1.75;
        resp1.innerText = `Tempo: 60min`;
      }
      else {
        troco = valor - 3;
        resp1.innerText = `Tempo: 120min`;
      }
  }
  resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
})

frm.addEventListener('reset', () => {
  resp1.innerText = ` `;
  resp2.innerText = ` `;
})