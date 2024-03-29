const preco = Number(prompt('Preço R$: '));
const desconto = preco - preco * 0.1;
const parcelado = preco / 3;

alert(`Preço: R$ ${preco.toFixed(2)}\nÀ vista: R$ ${desconto.toFixed(2)}\nOu 3x de: R$ ${parcelado.toFixed(2)}`);