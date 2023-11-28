import React from 'react'
import Card from '../Card'
import Section1 from '../Section1'
import Section2 from '../Section2'
import styles from '../styles/Section1.css'
const sec1 = ['Liderança', 'Trabalho em Equipe', 'Comunicação Efetiva', 'Resolução de Problemas', 'Gestão de Tempo', 'Empatia', 'Negociação', 'Adaptabilidade', 'Tomada de Decisão', 'Resiliência', 'Pensamento Crítico', 'Inovação', 'Gestão de Projetos', 'Trabalho Voluntário', 'Consciência Social']
const sec2 = ['Networking', 'Responsabilidade Social', 'Autoconfiança', 'Comprometimento', 'Aprendizado Contínuo', 'Gestão Financeira', 'Cidadania Ativa', 'Desenvolvimento Pessoal', 'Multiculturalidade', 'Marketing Social', 'Sustentabilidade', 'Tecnologia', 'Ética Profissional', 'Mentoria', 'Advocacy',]
const card = ['Urban Farms','Reciclagem','Palestras sociais','Palestras educacionais','Escrita e Tradução','Revitalização','Desing interiores','Animais']
const Main = () => {
  return (
    <>
      <Section1
        title='Como a  extensão deve funcionar'
        conteudo='Esqueça projetos tradicionais.Você pode conhecer os melhores projetos. Bem aqui '
        src='https://th.bing.com/th/id/OIG.kITKfgJDniaEouxp1a6H?pid=ImgGn'
      />

      <section>
        <div>
          <h2>Procure projetos por categorias:</h2>
        </div>
        <div className='divcard'>
          {card.map((e)=>{
            return <Card h2={e} body={'4,5/5 293 habilidades'} className={'card'}/>
          })}
        </div>
      </section>

      <section className='section3'>
        <h2>Principais Habilidades</h2>
        <div className='listL'>
          {sec1.map((e) => {
            return <p>{e}</p>
          })}
        </div>
        <div className='listL'>
          {sec2.map((e) => {
            return <p>{e}</p>
          })}
        </div>
      </section>
    </>
  )
}

export default Main