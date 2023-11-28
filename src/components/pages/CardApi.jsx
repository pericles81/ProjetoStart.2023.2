import React from 'react'
import styles from '../styles/cardApi.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Button from '../Button';
import Card from './../Card';
import { Link } from 'react-router-dom';
export const CardApi = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/projetos/listar');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // useContent propsItem codigo area contato descricao empresa nome ong
    return (
        <>
            
                <div className='divIntro'>
                    <div>
                    <h2>Encontre os melhores projetos</h2>
                    <p>É necessário apenas um trabalho para desenvolver um relacionamento de sucesso que possa impulsionar sua carreira. Encontrar trabalho</p>
                    <Button type={'button'} className={'btn'} value={'Encontrar Projetos'} />
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_1280.jpg" alt="" />
                    </div>
                </div>
      
            <div className='div1'>
                {data.map((e) => {
                    return <div className={'card'}>
                        <Card h2={e.nome} body={e.descricao} />
                        <div>

                        <Link to={{ pathname: `/home/${e.codigo}` }} > <Button type={'button'} value={"Ver mais"} className={'btn'} /></Link>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}
