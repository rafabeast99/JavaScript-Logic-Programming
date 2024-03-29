const valorDaConta = Number(prompt('Valor da conta R$: '));
const numeroDeClientes = Number(prompt('Número de clientes: '));

const resultado = valorDaConta / numeroDeClientes;

alert(`Valor da conta: R$ ${valorDaConta.toFixed(2)}\nNúmero de clientes: ${numeroDeClientes}\nValor por cliente: R$ ${resultado.toFixed(2)}`);