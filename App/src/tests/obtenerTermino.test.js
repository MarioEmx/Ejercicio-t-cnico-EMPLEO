const Serie = require('../components/ObtenerTermino');

describe('Serie', () => {
  const serie = new Serie();

  test('El término 1 debe ser igual a -0.33', () => {
    const resultado = serie.obtenerTermino(1);
    expect(resultado.error).toBe("");
    expect(resultado.resultado).toBe("-0.33");
  });

  test('El término 2 debe ser igual a NaN', () => {
    const resultado = serie.obtenerTermino(2);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("NaN");
  });

  test('El término 3 debe ser igual a 0.43', () => {
    const resultado = serie.obtenerTermino(3);
    expect(resultado.error).toBe("");
    expect(resultado.resultado).toBe("0.43");
  });

  test('El término 4 debe ser igual a infinito', () => {
    const resultado = serie.obtenerTermino(4);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("Infinity");
  });

  test('El término 5 debe ser igual a 3', () => {
    const resultado = serie.obtenerTermino(5);
    expect(resultado.error).toBe("");
    expect(resultado.resultado).toBe("3");
  });

  test('El término 6 debe ser igual a infinito', () => {
    const resultado = serie.obtenerTermino(6);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("Infinity");
  });

  test('El término 7 debe ser igual a Infinito', () => {
    const resultado = serie.obtenerTermino(7);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("Infinity");
  });

  test('El término 8 debe ser igual a infinito', () => {
    const resultado = serie.obtenerTermino(8);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("Infinity");
  });

  test('El término 9 debe ser igual a 6', () => {
    const resultado = serie.obtenerTermino(9);
    expect(resultado.error).toBe("");
    expect(resultado.resultado).toBe("6");
  });

  test('El término 10 debe ser igual a infinito', () => {
    const resultado = serie.obtenerTermino(10);
    expect(resultado.error).toBe("No es posible calcular el resultado ya que el divisor no puede ser 0");
    expect(resultado.resultado).toBe("Infinity");
  });
});
