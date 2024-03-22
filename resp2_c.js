const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {

  e.preventDefault();

  const produto = frm.inProduto.value;
  const preco = Number(frm.inPreco.value);
  const descontoUnitario = preco * 0.5;
  const promocao = (preco * 3) - descontoUnitario;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas: R$ ${descontoUnitario.toFixed(2)}`;
})
