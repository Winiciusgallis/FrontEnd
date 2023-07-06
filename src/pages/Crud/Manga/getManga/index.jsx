import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MangasList() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/mangas');
        setMangas(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching mangas:', error);
      }
    };

    fetchMangas();
  }, []);

  return (
    <div>
      <h1>Mangás</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {mangas.map((manga) => (
            <li key={manga.id}>
              {manga.nomemanga}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MangasList;
