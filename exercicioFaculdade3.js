const frm = document.querySelector('form'); //
const respLista1 = document.querySelector('#outResp1');
const respLista2 = document.querySelector('#outResp2');

const pets = [];

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const idade = Number(frm.inIdade.value);
  const peso = Number(frm.inPeso.value);
  const porte = frm.inPorte.value;

  pets.push({ nome, idade, peso, porte }); //Vetor de objetos para receber os dados de entrada

  let listaPets = 'Lista de Pets\n'
  listaPets += `${('-').repeat(20)}`;

  //Adição dos elementos na primeira lista.
  for (const pet of pets) {
    listaPets += `\nNome: ${pet.nome}\nIdade: ${pet.idade}\nPeso: ${pet.peso}\nPorte: ${pet.porte}\n`;
  }

  respLista1.innerText = listaPets;

  frm.reset();
  frm.inNome.focus();
})

frm.btListaPorte.addEventListener('click', () => {
  if (pets.length == 0) {
    alert('Não há animais na lista');
    return
  }

  const filtro = prompt('Informe o porte do animal(Pequeno, Medio, Grande, Gigante): '); //Filtro por porte 
  let listaFiltro = `Pets de porte ${filtro}:\n`;
  listaFiltro += `${('-').repeat(20)}`;

  if (filtro == 'Pequeno') {
    const listaFiltradaP = pets.filter(aux => aux.porte == 'Pequeno'); //Cria novo vetor 
    listaFiltradaP.forEach((pet, i) => {
      listaFiltro += `\n${i + 1}º pet:\nNome: ${pet.nome}\n`;
    })

  }
  else if (filtro == 'Medio') {
    const listaFiltradaM = pets.filter(aux => aux.porte == 'Medio');//Cria novo vetor
    listaFiltradaM.forEach((pet, i) => {
      listaFiltro += `\n${i + 1}º pet:\nNome: ${pet.nome}\n`;
    })
  }
  else if (filtro == 'Grande') {
    const listaFiltradaG = pets.filter(aux => aux.porte == 'Grande');//Cria novo vetor
    listaFiltradaG.forEach((pet, i) => {
      listaFiltro += `\n${i + 1}º pet:\nNome: ${pet.nome}\n`;
    })
  }
  else if (filtro == 'Gigante') {
    const listaFiltradaGG = pets.filter(aux => aux.porte == 'Gigante');//Cria novo vetor
    listaFiltradaGG.forEach((pet, i) => {
      listaFiltro += `\n${i + 1}º pet:\nNome: ${pet.nome}\n`;
    })
  }
  else {
    alert('Porte não identificado');
    return
  }

  respLista2.innerText = listaFiltro;
})