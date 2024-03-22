const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {

  e.preventDefault();

  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);
  const promocao = Math.floor(preco * 2);

  resp1.innerText = `Promoção de ${medicamento}`;
  resp2.innerText = `Leve 2 por apenas: R$ ${promocao.toFixed(2)}`;
})