import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CapitulosList() {
  const [capitulos, setCapitulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCapitulos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/capitulos');
        setCapitulos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching capitulos:', error);
      }
    };

    fetchCapitulos();
  }, []);

  return (
    <div>
      <h2>Lista de Capítulos</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {capitulos.map((capitulo) => (
            <div key={capitulo.id}>
              <p>ID: {capitulo.id}</p>
              <p>Nome do Manga: {capitulo.nomemanga}</p>
              <p>Número do Capítulo: {capitulo.cap_num}</p>
              <p>ID do Manga: {capitulo.manga_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CapitulosList;
