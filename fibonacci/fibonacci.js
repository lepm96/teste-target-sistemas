// Lê o número informado pelo usuário
const numero = parseInt(prompt("Informe um número:"));

// Inicializa os valores de Fibonacci
let a = 0;
let b = 1;
let proximo = 1;

// Loop para calcular a sequência de Fibonacci até que o próximo valor seja maior ou igual ao número informado
while (proximo < numero) {
  proximo = a + b;
  a = b;
  b = proximo;
}

// Verifica se o número informado pertence à sequência de Fibonacci
if (proximo === numero) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
