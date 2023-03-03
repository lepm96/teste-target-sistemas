const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const faturamentoTotal = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);
  
  const representacao = {};
  
  for (const estado in faturamento) {
    representacao[estado] = ((faturamento[estado] / faturamentoTotal) * 100).toFixed(2) + '%';
  }
  
  console.log(representacao);
  