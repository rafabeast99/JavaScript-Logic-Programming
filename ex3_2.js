const prompt = require('prompt-sync')();

const veiuculo = prompt('Veículo: ');
const preco = Number(prompt('Preço R$: '))

const entrada = preco * 0.5;
const parcela = entrada / 12;

console.log(`Promoção: ${veiuculo}`)
console.log(`Entrada de: R$ ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)