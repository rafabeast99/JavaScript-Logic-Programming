// Cria referência ao form e ao elemento h3(onde será exiida a resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

// Cria um "ouvinte" do evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {

  const nome = frm.inNome.value;
  resp.innerText = `Olá, ${nome}!`;

  e.preventDefault();
})