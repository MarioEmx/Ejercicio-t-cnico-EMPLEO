import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./components/Formulario";
import CalculoTermino from "./components/CalculoTermino";
import Resultado from "./components/Resultado";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(n) {
    this.setState({ n });
  }

  render() {
    return (
      <div>
        <Formulario onSubmit={this.handleFormSubmit} />
        {this.state.n && <CalculoTermino n={this.state.n} />}
        {this.state.n && <Resultado resultado={this.state.resultado} />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
