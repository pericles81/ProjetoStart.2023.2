import React, { useEffect, useState } from 'react';
import styles from './styles/Card.css'
function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os dados da API: ', error);
      });
  }, []);

  return (
    
      <>
        {posts.map(post => (
          <div  className="Card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </>

  );
}

export default Card;