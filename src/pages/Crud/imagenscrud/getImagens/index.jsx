import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImagensList() {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImagens = async () => {
      try {
        const response = await axios.get('http://localhost:3001/imagens');
        setImagens(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching imagens:', error);
      }
    };

    fetchImagens();
  }, []);

  return (
    <div>
      <h2>Lista de Imagens</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {imagens.map((imagem) => (
            <div key={imagem.id}>
              <p>ID: {imagem.id}</p>
              <p>Página: {imagem.pag_num}</p>
              <p>URL da Imagem: <img src={imagem.imag_url} alt="Imagem" /></p>
              <p>ID do Capítulo: {imagem.cap_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImagensList;
