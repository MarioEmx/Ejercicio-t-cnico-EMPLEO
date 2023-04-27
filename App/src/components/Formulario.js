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
    
    if (resultado.error) { // Si hay un error escribir el estado del mensaje de error
      this.setState({ error: resultado.error, resultado: null });
    } else { // Si no hay error actualizar el estado del resultado y dejar el mensaje de error en null
      this.setState({ resultado: resultado.resultado, error: null });
    }
  }

  limpiar(){    
    const input = document.querySelector("input");                    ;    
    input.value="";    

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Ingrese un número:
          <input type="number" value={this.state.n} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleSubmit} className="btn">Calcular término</button>
        {this.state.resultado && (
          <p className="resultado">Mi resultado es: {this.state.resultado}</p>
        )}
        {this.state.error && (
          <p className="error">{this.state.error}</p>
        )}
        <button type="button" className="remove_btn" onClick={this.limpiar}>Limpiar formulario</button>
      </form>
    );
  }
}

export default Formulario;