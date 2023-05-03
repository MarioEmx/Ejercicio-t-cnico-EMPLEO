import React from "react";
import Formulario from "../components/Formulario";
import Resultado from "../components/Resultado";
import Serie from "../components/ObtenerTermino";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: "",
      resultado: null,
      error: null,
      mostrarBtnLimpiar: false,
      isNEmpty: true // Estado para indicar si el campo n está vacío
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearN = this.clearN.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      n: event.target.value,
      isNEmpty: event.target.value === "" // Actualiza isNEmpty
    });
  }

  handleSubmit() {
    const serie = new Serie();
    const resultado = serie.obtenerTermino(parseInt(this.state.n));

    if (this.state.isNEmpty) { // Valida si n está vacío
      this.setState({
        error: "Debe ingresar un número",
        resultado: null,
        mostrarBtnLimpiar: true
      });
    } else if (resultado.error) {
      this.setState({
        error: resultado.error,
        resultado: null,
        mostrarBtnLimpiar: true
      });
    } else {
      this.setState({
        resultado: resultado.resultado,
        error: null,
        mostrarBtnLimpiar: true
      });
    }
  }

  clearN() {
    this.setState({
      n: "",
      resultado: null,
      error: null,
      mostrarBtnLimpiar: false, // Oculta el btn limpiar
      isNEmpty: true // Reinicia isNEmpty
    });
  }

  clearForm() {
    this.setState({
      n: "",
      resultado: null,
      error: null,
      mostrarBtnLimpiar: false, // Oculta el btn limpiar
      isNEmpty: true // Reinicia isNEmpty
    });
  }

  render() {
    const disabled = this.state.isNEmpty; // Calcula la prop disabled
    return (
      <div className="form_wrapper">
        <div>Formulario para calcular el n termino de la serie:
          <img src="../img/serie.png"></img>
        </div>
        
        <Formulario
          value={this.state.n}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Resultado
          resultado={this.state.resultado}
          error={this.state.error}
          disabled={disabled} 
          mostrarBtnLimpiar={this.state.mostrarBtnLimpiar}
          onClear={this.clearForm}
        />
      </div>
    );
  }
}

export default App;