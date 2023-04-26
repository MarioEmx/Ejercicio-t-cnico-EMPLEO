import Formulario from '../components/Formulario';
import Calculo from '../components/Calculo';
import Resultado from '../components/Resultado';

export default function App() {
  // Aquí puedes manejar el estado del número ingresado en el formulario y pasar la información a los otros componentes
  return (
    <>
      <Formulario />
      <Calculo />
      <Resultado />
    </>
  );
}
