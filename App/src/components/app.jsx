import React, { useState } from 'react';
import Formulario from './Formulario';
import Calculo from './Calculo';
import Resultado from './Resultado';

function App() {
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState('');

  function handleSubmit(numero) {
    setNumero(numero);
  }

  function handleResult(termino) {
    setResultado(termino);
  }

  return (
    <div>
      <Formulario onSubmit={handleSubmit} />
      {numero !== 0 && <Calculo numero={numero} onResult={handleResult} />}
      {resultado !== '' && <Resultado resultado={resultado} />}
    </div>
  );
}

export default App;
