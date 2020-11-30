import React from "react";

export default function ComParametros(props) {
  // console.log(props);
  const { titulo, aluno, nota } = props;
  let status;
  const novaNota = nota + 1;
//   lembre-se de nunca tentar alterar a props, 
//   contúdo podemos atribuir props para uma variavel e fazer as alterações nesta variavel.
  if (nota >= 8) {
    status = "aprovado";
  } else {
    status = "reprovado";
  }
  return (
    <div>
      <h1>{titulo}</h1>
      <p>
        Aluno: <strong>{aluno}</strong> obteve nota: <strong>{novaNota}</strong>,
        situação: <em>{status}</em>
      </p>
    </div>
  );
}
