import React from 'react';
import Alunos from '../../data/Alunos';

const listaGeral = Alunos.map(aluno => {
    return (
    <li key={aluno.id}>{aluno.id}, {aluno.nome} - {aluno.nota}</li>
    )
})

export default props => {
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {listaGeral}
            </ul>
        </div>
    )
}