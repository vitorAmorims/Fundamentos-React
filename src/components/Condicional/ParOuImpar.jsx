import React from "react";

export default (props) => {
  const { numero } = props;
  const result = (numero % 2 === 0) ? <h1>Par</h1> : <h2>Impar</h2>;
  return <div>{result}</div>;
};
