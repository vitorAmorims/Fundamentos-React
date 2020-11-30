import React, { Component } from "react";

class Contador extends Component {
    state = {
      numero: this.props.numeroInicial,
      passo: this.props.passo,
    
      // manipulando localStorage
      products: JSON.parse(localStorage.getItem('cart')),
    };
  
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    })
  }
  alterarInicial = (event) => {
    const novoInicial = parseInt(event.target.value);
    this.setState({
      numero: novoInicial,
    });
  }
  alterarPasso = (event) => {
    const novoPasso = parseInt(event.target.value);
    this.setState({
      passo: novoPasso,
    });
  }
  render() {
    // manipulando localStorage
    // const teste = this.state.products;
    // const price = teste.map((element) => {
    //   const {number, price} = element;
    //   console.log(number, price);
    //   return price;
    // })
    return (
      <div>
        <h1>Contador</h1>
        <p>{this.state.numero}</p>
        <button onClick={this.inc}>Adicionar</button>
        <button onClick={this.dec}>Subtrair</button>
        <label htmlFor="">
          <input onChange={this.alterarInicial} type="number" placeholder="Digite um número para inicio"/>
        </label>
        <label htmlFor="">
          <input onChange={this.alterarPasso} type="number" placeholder="Digite o valor do passo"/>
        </label>
      </div>
    );
  }
}

export default Contador;
