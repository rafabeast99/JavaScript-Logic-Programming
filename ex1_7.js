const jantar = Number(prompt('Valor do jantar R$: '));
const taxaGarcom = jantar * 0.1;
const total = jantar + taxaGarcom;
alert(`Taxa do Garçom: R$ ${taxaGarcom.toFixed(2)}\nTotal: R$ ${total.toFixed(2)}`)