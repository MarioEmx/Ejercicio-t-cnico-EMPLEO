import React from 'react';
import Serie from './obtenerTermino';

function Calculo(props) {
  const termino = Serie.obtenerTermino(props.numero);

  props.onResult(termino);

  return null;
}

export default Calculo;
