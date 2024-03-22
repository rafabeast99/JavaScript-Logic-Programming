const prompt = require('prompt-sync')();

const pesoDaRacao = Number(prompt('Peso da Ração(kg): '));
const consumo = Number(prompt('Consuno diário(gr): '));

const pesoGrama = pesoDaRacao * 1000;

const duracao = Math.floor(pesoGrama / consumo);
const sobra = pesoGrama % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gr`);