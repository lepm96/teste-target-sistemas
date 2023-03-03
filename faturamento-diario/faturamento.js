
const fs = require("fs");

// Lê o arquivo JSON e converte para objeto JavaScript
const faturamentoJSON = fs.readFileSync("dados.json");
const faturamento = JSON.parse(faturamentoJSON);

// Extrai os dados de faturamento diário do objeto JavaScript
const faturamentoDiario = faturamento.faturamentoDiario;

// Aplica as mesmas operações do exemplo anterior
const menorFaturamentoDiario = Math.min(
  ...faturamentoDiario.filter((valor) => valor !== 0)
);
const maiorFaturamentoDiario = Math.max(...faturamentoDiario);
const diasComFaturamento = faturamentoDiario.filter((valor) => valor !== 0);
const mediaMensal =
  diasComFaturamento.reduce((soma, valor) => soma + valor, 0) /
  diasComFaturamento.length;
const diasAcimaDaMedia = diasComFaturamento.filter(
  (valor) => valor > mediaMensal
).length;

console.log(`Menor faturamento diário: R$ ${menorFaturamentoDiario}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamentoDiario}`);
console.log(`Dias com faturamento acima da média mensal (${mediaMensal}): ${diasAcimaDaMedia}`);