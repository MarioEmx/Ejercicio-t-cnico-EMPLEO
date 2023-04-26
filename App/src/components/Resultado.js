import React from "react";

class Resultado extends React.Component {
  render() {
    return (
      <div>
        {this.props.resultado && (
          <p>Tu resultado es: {this.props.resultado}</p>
        )}
      </div>
    );
  }
}

export default Resultado;

