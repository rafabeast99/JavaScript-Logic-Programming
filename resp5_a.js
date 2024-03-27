const prompt = require('prompt-sync')();

const fruta = prompt('Fruta: ');
const num = Number(prompt('Numero: '));
let resposta = `${fruta}`;

for (let i = 1; i < num; i++) {
  resposta += `*${fruta}`;
}

console.log(resposta);