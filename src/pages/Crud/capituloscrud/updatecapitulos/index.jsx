import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCapitulo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nomemanga: '',
    cap_num: '',
    manga_id: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCapitulo = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/capitulos/${id}`);
        const capitulo = response.data;
        setForm({
          nomemanga: capitulo.nomemanga,
          cap_num: capitulo.cap_num,
          manga_id: capitulo.manga_id,
        });
      } catch (error) {
        console.error('Error fetching capitulo:', error);
      }
    };

    fetchCapitulo();
  }, [id]);

  const handleInputChange = (event) => {
    setError('');
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const updateCapitulo = async () => {
    try {
      await axios.put(`http://localhost:3001/capitulos/${id}`, form);
      navigate('/capitulos'); // Redirecionar de volta para a página de listagem de capitulos após a atualização
    } catch (error) {
      setError('Erro ao atualizar o capítulo');
      console.error('Error updating capitulo:', error);
    }
  };

  return (
    <div>
      <h2>Atualizar Capítulo</h2>
      <form>
        <label>
          Nome do Manga:
          <input
            type="text"
            name="nomemanga"
            value={form.nomemanga}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Número do Capítulo:
          <input
            type="text"
            name="cap_num"
            value={form.cap_num}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          ID do Manga:
          <input
            type="text"
            name="manga_id"
            value={form.manga_id}
            onChange={handleInputChange}
            required
          />
        </label>

        {error && <div className="error">{error}</div>}

        <button type="button" onClick={updateCapitulo}>
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default UpdateCapitulo;
