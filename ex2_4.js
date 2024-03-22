const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {

  e.preventDefault();

  const quilo = Number(frm.inQuilo.value);
  const consumo = Number(frm.inPeso.value);

  const valor = (consumo / 1000) * quilo;

  resp.innerText = `Valor a pagar em R$: ${valor.toFixed(2)}`;
})