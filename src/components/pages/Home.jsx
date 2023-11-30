import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Home () {
  
  const {id} = useParams();
  const [data, setData] = useState({});


  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`http://localhost:8080/projetos/listar/${id}`);
              setData(response.data);
          } catch (error) {
              console.error('Error fetching data:', error.message);
          }
      };
      fetchData();
  }, []);
  console.log(data)
  return (
    <div>
      <h2>{data.nome}</h2>
      <p>{data.descricao}</p>
      <p>{data.ong}</p>
    </div>
  )
}
