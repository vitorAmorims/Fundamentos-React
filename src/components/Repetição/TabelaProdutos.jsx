import React from "react";
import ListaProdutos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const TabelaProdutos = ListaProdutos.map((produto, index) => {
    return (
      <tr key={produto.id} className={index % 2 === 0 ? 'Par':''}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome:</th>
            <th>Preço:</th>
          </tr>
        </thead>
        <tbody>{TabelaProdutos}</tbody>
      </table>
    </div>
  );
};
