import styles from './styles/Section1.css'
export default function Section1(props) {
    return (
        <section className='section1'>
            <div className={props.className}>
                <h2>{props.title}</h2>
                <p>{props.conteudo}</p>
            </div>
            <div>
                <img src={props.src} />
            </div>
        </section>
    )
}