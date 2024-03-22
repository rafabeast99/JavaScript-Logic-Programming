const prompt = require('prompt-sync')();

let salario = Number(prompt('Salario R$: '))
const tempo = Number(prompt('Tempo de empresa(anos): '));

const quadrienios = Math.floor(tempo / 4);
const aumento = quadrienios * 0.01;

salario += aumento*salario;

console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final: ${salario.toFixed(2)}`);
