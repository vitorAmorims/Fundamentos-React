import React from "react";

class MegaSena extends React.Component {
  state = {
    number: 0,
    numeros: [],
  };
  handleChange = (event) => {
    const number = parseInt(event.target.value);
    this.setState({
      number,
    });
  };
  componentDidMount() {
    this.jogarMegasena();
  }
  jogarMegasena = () => {
    const numeros = [];
    for (let i = 0; i < this.state.number; i++) {
      numeros.push(Math.floor(Math.random() * 60 + 1));
    }
    numeros.filter((element, index) => {
      return numeros.indexOf(element) === index;
    });
    numeros.sort((a, b) => {
      return a - b;
    });
    return this.setState({ numeros });
  };

  render() {
    return (
      <div>
        <h2>Desafio Mega-sena</h2>
        <p>
          <strong>{this.state.numeros + ""}</strong>
        </p>
        <input
          min="6"
          max="15"
          onChange={this.handleChange}
          type="number"
          placeholder="Digite a quantidade de números."
        />
        <button onClick={this.jogarMegasena}>Gerar</button>
      </div>
    );
  }
}

export default MegaSena;
