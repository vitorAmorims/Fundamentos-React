import "./App.css";
import React from "react";
import HelloWorld from "./components/basics/Primeiro";
import ComParametros from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from './components/Repetição/ListaAlunos';
import TabelaProdutos from './components/Repetição/TabelaProdutos';
import ParOuImpar from './components/Condicional/ParOuImpar';
import ComponentePai from './components/Estado/ComponentePai';
import Contador from './components/Estado/Contador'
import MegaSena from './MegaSena/MegaSena'

const AlunoTeste = {
  id: 1,
};
// inserido lógica no componente Fragment, se alterar o id para !== 1 não vai renderizar
function App() {
  function gera_cor() {
    const hexadecimais = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let cor = "#";

    for (let i = 0; i < 6; i++) {
      cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }
  
  return (
    <div className="App">
      <h1>FUNDAMENTOS DE REACT</h1>
      <div className="Cards">
        <Card titulo="#01 HelloWord" color={gera_cor()}>
          <HelloWorld />
        </Card>
        <Card titulo="#02 c/ Parametros" color={gera_cor()}>
          <ComParametros titulo="Situação do aluno" aluno="Vitor" nota={7} />
          <ComParametros titulo="Situação do aluno" aluno="Lucas" nota={9} />
        </Card>
        <Card titulo="#03 Fragment" color={gera_cor()}>
          <Fragment aluno={AlunoTeste} />
        </Card>
        <Card titulo="#04 Aleatório" color={gera_cor()}>
          <Aleatorio max={10} min={1} />
        </Card>
        <Card titulo="#05 Componente c/Filho" color={gera_cor()}>
          <Familia sobrenome="Amorim">
            <FamiliaMembro nome="Lucas" />
            <FamiliaMembro nome="Vitor" />
            <FamiliaMembro nome="Silvia" />
          </Familia>
        </Card>
        <Card titulo="#06 Repetição listaDalunos" color={gera_cor()}>
            <ListaAlunos />          
        </Card>
        <Card titulo="#07 Desafio TabelaProdutos" color={gera_cor()}>
            <TabelaProdutos />              
        </Card>
        <Card titulo="#08 Renderização Condicional" color={gera_cor()}>
            <ParOuImpar numero={21} />              
        </Card>
        <Card titulo="#10 Componente com estado" color={gera_cor()}>
            <ComponentePai />             
        </Card>
        <Card titulo="#11 Contador" color={gera_cor()}>
          <Contador numeroInicial={10} passo={5} />                         
        </Card>
        <Card titulo="#Desafio MegaSena" color={gera_cor()}>
          <MegaSena />                         
        </Card>
      </div>
    </div>
  );
}

export default App;
