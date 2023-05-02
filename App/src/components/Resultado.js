import React from "react";

class Resultado extends React.Component {
  clearForm(event) {
    const res = document.querySelectorAll("p");
    res.forEach(p => {
      p.style.display = "none";          
    });
    event.target.style.display="none";
  }
  
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





/*import React from "react";

class Resultado extends React.Component {
  
  render() {        
    return (      
      <div>
        {this.props.resultado}        
      </div>
    );
  }
}

export default Resultado;*/

