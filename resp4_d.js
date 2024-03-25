const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  const soma1 = ladoA + ladoB;
  const soma2 = ladoA + ladoC;
  const soma3 = ladoB + ladoC;

  let triangulo;

  if (ladoA < soma3 && ladoB < soma2 && ladoC < soma1) {

    if (ladoA == ladoB && ladoB == ladoC) {
      triangulo = 'Equilátero';
    }
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      triangulo = 'Isósceles';
    }
    else {
      triangulo = 'Escaleno';
    }

    resp1.innerText = `Lados podem formar um triângulo`;
    resp2.innerText = `Tipo: ${triangulo}`;
  }
  else {
    alert(`Os lados não podem formar um triângulo`);
  }

})

frm.addEventListener('reset', () => {
  resp1.innerText = ` `;
  resp2.innerText = ` `;
})