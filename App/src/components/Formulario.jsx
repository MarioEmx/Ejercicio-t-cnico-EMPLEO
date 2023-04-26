import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ n: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.n);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Número:
          <input type="text" value={this.state.n} onChange={this.handleChange} />
        </label>
        <button type="submit">Calcular</button>
      </form>
    );
  }
}

export default Formulario;
