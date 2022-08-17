/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  if (array === [] || array.length === 0) {
    return undefined;
  }
  let soma = 0;
  let divisor = 0;
  for (let value of array) {
    if (typeof value !== 'number') {
      return undefined;
    }
    soma += value;
    divisor += 1;
  }
  let media = Math.round(soma / divisor);
  return media;
};

module.exports = average;
