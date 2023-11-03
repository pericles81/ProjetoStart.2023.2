import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import styles from './styles/Section1.css'
const Main = () => {
  return (
    <main>
        <Section1
            title='olá'
            conteudo= 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'
            src= 'https://as2.ftcdn.net/v2/jpg/06/03/10/67/1000_F_603106726_yf2q2NwOipusxPHi2RlIjqKwcBQdVTuM.jpg'
        />
        <Section1
            className='sec1'
            title='oi'
            conteudo= 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit'
            src= 'https://as2.ftcdn.net/v2/jpg/05/00/51/05/1000_F_500510504_U50aHIVsgb1AO1fXxEkEPqxbML8Q19Mr.jpg'
        />

        <Section2 />
    </main>
  )
}

export default Main