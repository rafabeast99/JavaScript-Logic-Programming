const prompt = require('prompt-sync')();

const pessoas = Number(prompt('Nº de pessoas: '));
const peixes = Number(prompt('Nº de peixes: '));

let pagar;

if (peixes <= pessoas) {
  pagar = 20 * pessoas;
}
else {
  pagar = (20 * pessoas) + 12 * (peixes - pessoas);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`);