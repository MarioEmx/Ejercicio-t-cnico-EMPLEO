import React from "react";
import Serie from "../components/obtenerTermino"

class Formulario extends React.Component {  
  constructor(props) {
    super(props);
    this.state = { 
      n: "",
      resultado: null, // Agregando el estado del resultado
      error: null // Agregando el estado del mensaje de error
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ n: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const serie = new Serie();
    const resultado = serie.obtenerTermino(parseInt(this.state.n));
    console.log(resultado);
    
    if (resultado.error) { // Si hay un error, actualizar el estado del mensaje de error
      this.setState({ error: resultado.error, resultado: null });
    } else { // Si no hay error, actualizar el estado del resultado y dejar el mensaje de error en null
      this.setState({ resultado: resultado.resultado, error: null });
    }
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ingrese un número:
          <input type="number" value={this.state.n} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleSubmit}>Calcular término</button>
        {this.state.resultado && (
          <p>Mi resultado es: {this.state.resultado}</p>
        )}
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
      </form>
    );
  }
}

export default Formulario;