const prompt = require('prompt-sync')();

const num1 = Number(prompt('1º número: '));
const num2 = Number(prompt('2º número: '));

const soma = num1 + num2;
console.log(`Soma é: ${soma}`);