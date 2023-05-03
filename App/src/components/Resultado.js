import React from "react";

class Resultado extends React.Component {
  render() {
    return (
      <div>
        {this.props.resultado && (
          <p className="resultado">El resultado es: {this.props.resultado}</p>
        )}
        {this.props.error && <p className="error">{this.props.error}</p>}
        {this.props.mostrarBtnLimpiar && (
          <button type="button" className="remove_btn" onClick={this.props.onClear}>
            Limpiar formulario
          </button>
        )}
      </div>
    );
  }
}

export default Resultado;