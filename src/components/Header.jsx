import styles from './styles/Header.css'
import Button from './Button'
export default function Header() {
    const opcoes = ['Projetos','Ongs','Empresas','Instituições de ensino']
    return(
        <header>
            <div className='divHeader1'>
            <h1>Logo</h1>
            <div>
                {opcoes.map((element)=>{
                    return <p>{element}</p>
                })}
                <Button type='button'  value='Log in'/>
                <Button type='button'  value='Sing in'/>
            </div>
            </div>
            <div className='divHeader2'>
                {opcoes.map((element)=>{
                    return <p>{element}</p>
                })}
            </div>
            <hr />
        </header>
    )
}