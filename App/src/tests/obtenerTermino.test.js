const Serie = require('../components/obtenerTermino.js');

describe('Serie', () => {
  const serie = new Serie();

  test('El término 1 debe ser igual a -0.33', () => {
    expect(serie.obtenerTermino(1)).toBe("-0.33");
  });

  test('El término 2 debe ser igual a NaN', () => {
    expect(serie.obtenerTermino(2)).toBe("NaN");
  });

  test('El término 3 debe ser igual a 0.43', () => {
    expect(serie.obtenerTermino(3)).toBe("0.43");
  });

  test('El término 4 debe ser igual a infinito', () => {
    expect(serie.obtenerTermino(4)).toBe("Infinity");
  });

  test('El término 5 debe ser igual a 3', () => {
    expect(serie.obtenerTermino(5)).toBe("3");
  });

  test('El término 6 debe ser igual a infinito', () => {
    expect(serie.obtenerTermino(6)).toBe("Infinity");
  });

  test('El término 7 debe ser igual a Infinito', () => {
    expect(serie.obtenerTermino(7)).toBe("Infinity");
  });

  test('El término 8 debe ser igual a infinito', () => {
    expect(serie.obtenerTermino(8)).toBe("Infinity");
  });

  test('El término 9 debe ser igual a 6', () => {
    expect(serie.obtenerTermino(9)).toBe("6");
  });

  test('El término 10 debe ser igual a infinito', () => {
    expect(serie.obtenerTermino(10)).toBe("Infinity");
  });
});
