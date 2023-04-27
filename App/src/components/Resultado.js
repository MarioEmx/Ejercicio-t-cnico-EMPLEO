import React from "react";

class Resultado extends React.Component {
  
  render() {
    const message = document.querySelectorAll("p");    
    return (      
      <div>
        {this.props.resultado}        
      </div>
    );
  }
}

export default Resultado;

