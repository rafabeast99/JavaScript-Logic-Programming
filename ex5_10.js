const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor da Compra: '));
const numParcelas = Number(prompt('Nº de parcelas: '));
const valorParcela = Math.floor(valor / numParcelas);
const parcelaFinal = valorParcela + (valor % numParcelas);

for (let i = 1; i < numParcelas; i++) {
  console.log(`${i}ª parcela: ${valorParcela.toFixed(2)}`);
}
console.log(`${numParcelas}ª parcela: ${parcelaFinal.toFixed(2)}`);


