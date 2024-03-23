const frm = document.querySelector('frm');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const horaBrasil = Number(frm.inHoraBrasil.value);
  let horaFranca = horaBrasil + 5;

  if (horaFranca > 23.59) {
    horaFranca -= 24;
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;
  }
})