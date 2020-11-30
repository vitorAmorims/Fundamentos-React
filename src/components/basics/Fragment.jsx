import React from 'react';

export default function Fragment(props) {
    // console.log(props.aluno.id)
    if (props.aluno.id === 1)
    return (
        <React.Fragment key={props.id}>
            <h2>Analisando React fragment</h2>
            <p>Primeiro com React.Fragment, que permite colocar alguns atributos</p>
            <p>Depois sem o nome desta tag</p>
        </React.Fragment>
    )
    return alert("Não vai renderizar")
}