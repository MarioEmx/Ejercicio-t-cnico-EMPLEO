import React from "react";

class Resultado extends React.Component {  
  
  render() {        
    return (      
      <div>
        {this.props.resultado}  
        {this.props.resultado && (
          <button type="button" className="remove_btn" onClick={this.clearForm}>Limpiar formulario</button>
        )}
      </div>
    );
  }
}

export default Resultado;