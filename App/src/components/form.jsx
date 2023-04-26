import React, { useState } from 'react';

function Formulario(props) {
  const [numero, setNumero] = useState(0);

  function handleChange(event) {
    setNumero(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(numero);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numero">Ingrese un número:</label>
      <input id="numero" type="number" value={numero} onChange={handleChange} />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
