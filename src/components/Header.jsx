import styles from './styles/Header.css'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom';
import logoA from './assets/logoA.png'
export default function Header() {
    const opcoes = ['Encontre projetos', 'Conheça as ONGs', 'Por que participar', 'Parceiros']
    const location = useLocation();
    const page = location.pathname
    const headerDefault = () => {
        if (page === '/') {
            return (
                <header>
                    <div className='divHeader1'>
                        <Link to={'/'}><img src={logoA} alt="" /></Link>
                        <div className='divHeader3'>
                            {opcoes.map((element) => {
                                return <p className='linkHeader'> {element}</p>
                            })}
                            <Link to={'/login'} className='linkB'><Button  type='button' value='Conecte-se' /></Link>
                            <Link to={'/cadastro1'} className='linkB'><Button  type='button' value='Inscreva-se' /></Link>
                        </div>
                    </div>
                </header>
            )
        } else if (page === '/login' || page === '/cadastro1') {
            return (
                <header>
                    <div className='divHeader2'>
                        <Link to={'/'}><img src={logoA} alt="" /></Link>
                        <div className='divHeader3'>
                            <Link to={'/cadastro1'} className='linkB'><Button className='inputHeader2' type='button' value='Inscreva-se' /></Link>
                        </div>
                    </div>
                </header>
            )
        }
         else if (page === '/user') {
            return (
                <header>
                    <div className='divHeader1'>
                        <Link to={'/'}><img src={logoA} alt="" /></Link>
                        <div className='divHeader3'>
                            {opcoes.map((element) => {
                                return <p className='linkHeader'> {element}</p>
                            })}
                            <Link to={'/user'} className='linkB'><Button  type='button' value='Pesquisar' /></Link>
                            <Link to={'/'} className='linkB'><Button  type='button' value='Sair' /></Link>
                        </div>
                    </div>
                </header>
            )
        }

    }
    return (
        <nav>{headerDefault()}</nav>
    )
}