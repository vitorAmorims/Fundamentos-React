import React from 'react';

export default function Aleatorio(props) {
    // console.log(props);
    const {max, min} = props;
    return (
    <div>
        <h2>Valor aleatório</h2>
        <p>Valor Máximo escolhido: {max}</p>
        <p>Valor Mínimo escolhido: {min}</p>
        <p>Valor Aleatório gerado: {Math.floor(Math.random() * (max - min) + 1)}</p> 
    </div>
    )
}

