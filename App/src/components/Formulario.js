import React from "react";
import Serie from "./ObtenerTermino";

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
  
  //Se captura el valor del input
  handleChange(event) {
    this.setState({ n: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const serie = new Serie(),
    resultado = serie.obtenerTermino(parseInt(this.state.n)),        
    res = document.querySelectorAll("p");
    res.forEach(p => {
      p.style.display = "block";          
    });
    const clear = document.querySelector(".remove_btn");
    clear.style.display="block";
    
    if (resultado.error) { // Si hay un error escribir el estado del mensaje de error
      this.setState({ error: resultado.error, resultado: null });
    } else { // Si no hay error actualizar el estado del resultado y dejar el mensaje de error en null
      this.setState({ resultado: resultado.resultado, error: null });
    }
  }

  //Limpiamos el formulario y resultado 
  clearForm(event){    
    const input = document.querySelector("input"),    
    res = document.querySelectorAll("p");
    res.forEach(p => {
      p.style.display = "none";          
    });
    event.target.style.display="none";
    input.value="";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Ingrese un número:
          <input type="number" min="0" value={this.state.n} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleSubmit} className="btn">Calcular término</button>
        {this.state.resultado && (
          <p className="resultado">El resultado es: {this.state.resultado}</p>
        )}
        {this.state.error && (
          <p className="error">{this.state.error}</p>
        )}
        <button type="button" className="remove_btn" onClick={this.clearForm}>Limpiar formulario</button>
      </form>
    );
  }
}

export default Formulario;