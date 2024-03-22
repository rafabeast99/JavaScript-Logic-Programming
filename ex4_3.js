const prompt = require('prompt-sync')();

const bairro = prompt('Bairro de entrega: ');
let taxaDeEntrega;

switch (bairro) {
  case 'Centro':
    taxaDeEntrega = 5.00;
    break

  case 'Fragata':
  case 'Tres Vendas':
    taxaDeEntrega = 7.00;
    break

  case 'Laranjal':
    taxaDeEntrega = 10.00;
    break

  default:
    taxaDeEntrega = 8.00;
}

console.log(`Taxa R$: ${taxaDeEntrega.toFixed(2)}`)