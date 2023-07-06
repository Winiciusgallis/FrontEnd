import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateImage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    pag_num: '',
    imag_url: '',
    cap_id: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/imagens/${id}`);
        const image = response.data;
        setForm({
          pag_num: image.pag_num,
          imag_url: image.imag_url,
          cap_id: image.cap_id,
        });
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [id]);

  const handleInputChange = (event) => {
    setError('');
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const updateImage = async () => {
    try {
      await axios.put(`http://localhost:3001/imagens/${id}`, form);
      navigate('/imagens'); // Redirecionar de volta para a página de listagem de imagens após a atualização
    } catch (error) {
      setError('Erro ao atualizar a imagem');
      console.error('Error updating image:', error);
    }
  };

  return (
    <div>
      <h2>Atualizar Imagem</h2>
      <form>
        <label>
          Página:
          <input
            type="text"
            name="pag_num"
            value={form.pag_num}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          URL da Imagem:
          <input
            type="text"
            name="imag_url"
            value={form.imag_url}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          ID do Capítulo:
          <input
            type="text"
            name="cap_id"
            value={form.cap_id}
            onChange={handleInputChange}
            required
          />
        </label>

        {error && <div className="error">{error}</div>}

        <button type="button" onClick={updateImage}>
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default UpdateImage;
