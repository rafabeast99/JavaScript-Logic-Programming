alert('Digite 0 para sair');

do {
  const num = Number(prompt('Número: '));

  if (num == 0 || isNaN(num)) {
    const sair = confirm('Confirmar saída?');

    if (sair) {
      break
    }
    else {
      continue
    }
  }

  if (num % 2 == 0) {
    alert(`O dobro de ${num} é: ${num * 2}`);
  }
  else {
    alert(`O triplo de ${num} é: ${num * 3}`);
  }

  alert('Thanks');

} while (true)