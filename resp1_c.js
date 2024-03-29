const nota1 = Number(prompt('1ª nota: '));
const nota2 = Number(prompt('2ª nota: '));

const media = (nota1 + nota2) / 2;

alert(`1ª nota: ${nota1.toFixed(1)}\n2ª nota: ${nota2.toFixed(1)}\nMédia: ${media.toFixed(1)}`);