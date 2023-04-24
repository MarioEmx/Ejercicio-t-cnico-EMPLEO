class Serie {
    obtenerTermino(n) {
      // Calcular el "n" número de Fibonacci
      function fibonacci(n){        
        const numFib = [0, 1];      
        for (let i = 2; i <= n; i++) {            
          numFib[i] = numFib[i-2] + numFib[i-1];                
        }            
        return numFib[n];       
      }    
      // Calcular el "n" número de Triangular
      function triangular(n){      
        return (n * (n + 1)) / 2;
      }
      // Calcular numero primo
      function primo(n) {
        if (n <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }
      
      //Realizar operación
      let divisor = n-10;  
      if (divisor === 0) {
        return "No se puede calcular";
      }    
      return Math.round(3 * fibonacci(n) - (3 * triangular(n - 1)) / divisor * primo(n + 2));
    }
  };
  const serie = new Serie();
  console.log(serie.obtenerTermino(7));
  