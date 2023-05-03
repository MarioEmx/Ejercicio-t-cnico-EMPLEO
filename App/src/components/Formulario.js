import React from "react";
import Serie from "./ObtenerTermino";

class Formulario extends React.Component {  
  constructor(props) {
    super(props);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const serie = new Serie(),
    resultado = serie.obtenerTermino(parseInt(this.props.value));            
    this.props.handleSubmit(resultado);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Ingrese un número:
          <input type="number" min="0" value={this.props.value} onChange={this.props.handleChange} />
        </label>
        <button type="submit" className="btn">Calcular término</button>    
      </form>
    );
  }
}

export default Formulario;