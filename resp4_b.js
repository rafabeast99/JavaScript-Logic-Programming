const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
  const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);

  const multa = velocidadePermitida * 1.2;

  if (velocidadeCondutor <= velocidadePermitida) {
    resp.innerText = `Situação: Sem multa`;
    resp.style.color = 'blue';
  }
  else if (velocidadeCondutor <= multa) {
    resp.innerText = `Situação: Multa Leve`;
    resp.style.color = 'green';
  }
  else {
    resp.innerText = `Situação: Multa Grave`;
    resp.style.color = 'red';
  }
})