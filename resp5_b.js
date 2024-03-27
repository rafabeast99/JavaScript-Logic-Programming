const prompt = require('prompt-sync')();

let  numChichilas = Number(prompt('Nº Chinchilas: '));
const  anos = Number(prompt('Nº anos: '));
let resposta = ``;

for (let i = 0; i < anos; i++) {
  if (numChichilas < 2) {
    break
  }
  resposta += `${i + 1}º ano: ${numChichilas} Chinchilas\n`;
  numChichilas *= 3;
}
console.log(resposta);
