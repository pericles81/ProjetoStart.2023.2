import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/SelecaoCadastro.css'
const dados = [{ tipo: 'Empresa', img: 'https://cdn-icons-png.flaticon.com/128/3932/3932615.png' }, { tipo: 'Ong', img: 'https://cdn-icons-png.flaticon.com/128/8598/8598342.png' }, { tipo: 'Aluno', img: 'https://cdn-icons-png.flaticon.com/128/3044/3044129.png' }, { tipo: 'Instituição de ensino', img: 'https://cdn-icons-png.flaticon.com/128/3680/3680536.png' }]
export const SelecaoCadastro = () => {
    return (
        <div>
            <h2>Qual é o seu tipo de cadastro?</h2>
            <div className='div1'>
                {dados.map((e) => {
                    return (
                        <Link><div>
                            <img src={e.img} />
                            <p>{e.tipo}</p>
                        </div></Link>
                    )
                })}
            </div>
        </div>
    )
}
