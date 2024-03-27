const prompt = require('prompt-sync')();

console.log('Program Anos de Copa Do Mundo. Digite 0 para sair');
console.log('--------------------------------------------------\n')
do {
  const ano = Number(prompt('Ano: '));

  if (ano == 0 || isNaN(ano)) {
    break
  }
  else if (ano == 1942 || ano == 1946) {
    console.log(`Não houve Copa em ${ano} (Segunda Guerra Mundial)`);
  }
  else if (1930 <= ano && ano % 4 == 2) {
    console.log(`Sim! ${ano} é ano de Copa do Mundo\n`);
  }
  else {
    console.log(`${ano} não é ano de Copa do Mundo\n`);
  }
  } while (true);
