import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateManga() {
  const { mangaId } = useParams();
  const [form, setForm] = useState({
    nomemanga: '',
    synopsis: '',
    author: '',
    themes: '',
    status: '',
    genres: '',
    capamanga: '',
  });
  const [error, setError] = useState('');
  
  const handleInputChange = (event) => {
    setError('');
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/mangas/${mangaId}`);
        const manga = response.data;
        setForm({
          nomemanga: manga.nomemanga,
          synopsis: manga.synopsis,
          author: manga.author,
          themes: manga.themes,
          status: manga.status,
          genres: manga.genres,
          capamanga: manga.capamanga,
        });
      } catch (error) {
        console.error('Error fetching manga:', error);
      }
    };

    fetchManga();
  }, [mangaId]);

  const updateManga = async () => {
    try {
      await axios.put(`http://localhost:3001/mangas/${mangaId}`, form);
      navigate('/manga'); // Navegar de volta para a página inicial após a atualização do mangá
    } catch (error) {
      setError('Erro ao atualizar o mangá');
      console.error('Error updating manga:', error);
    }
  };

  return (
    <div>
      <h2>Atualizar Mangá</h2>
      <form>
        <label>
          Nome do Mangá:
          <input
            type="text"
            name="nomemanga"
            value={form.nomemanga}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Sinopse:
          <textarea
            name="synopsis"
            value={form.synopsis}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Autor:
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Temas:
          <input
            type="text"
            name="themes"
            value={form.themes}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Status:
          <input
            type="text"
            name="status"
            value={form.status}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Gêneros:
          <input
            type="text"
            name="genres"
            value={form.genres}
            onChange={handleInputChange}
          />
        </label>

        <label>
          URL da Capa do Mangá:
          <input
            type="text"
            name="capamanga"
            value={form.capamanga}
            onChange={handleInputChange}
            required
          />
        </label>

        {error && <div className="error">{error}</div>}

        <button type="button" onClick={updateManga}>
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default UpdateManga;
