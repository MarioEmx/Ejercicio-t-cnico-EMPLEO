class Serie {
  ObtenerTermino(n) {
    // Calcular el "n" número de Fibonacci
    function fibonacci(n) {
      const numFib = [0, 1];
      for (let i = 2; i <= n; i++) {
        numFib[i] = numFib[i - 2] + numFib[i - 1];
      }
      return numFib[n] * 3;
    }
    // Calcular el "n" número de Triangular
    function triangular(n) {
      return ((n * (n + 1)) / 2) * 3;
    }
    // Calcular si es numero primo
    function primo(n) {
      if (n < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }

    //Realizar operaciones
    let preDivisor = (n - 10); 
    let divisor =  preDivisor * primo(n + 2),
      dividendo = fibonacci(n) - triangular(n - 1),
      resultado = (dividendo / divisor);        

    if (divisor === 0 && divisor === -0) {
      return { error: "No es posible calcular el resultado ya que el divisor no puede ser 0", resultado: resultado.toString() };
    }

    if (!Number.isInteger(resultado)) {
      resultado = resultado.toFixed(2);
    }    
    return { error: "", resultado: resultado.toString() };    
  }
}

module.exports = Serie;
