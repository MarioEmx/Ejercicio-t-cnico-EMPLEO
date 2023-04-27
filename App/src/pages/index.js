import React from "react";
import Formulario from "../components/Formulario";
import Resultado from "../components/Resultado";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: "",
      resultado: ""
    };    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ n: event.target.value });
  }

  handleSubmit() {
    const resultado = new Formulario().obtenerResultado(parseInt(this.state.n));
    this.setState({ resultado: resultado });
  }
  

  render() {
    return (
      <div className="form_wrapper">        
        <Formulario
          value={this.state.n}
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit} // Pasando la función handleSubmit como prop
        />

        <Resultado resultado={this.state.resultado} />
      </div>
    );
  }
}

export default App;
