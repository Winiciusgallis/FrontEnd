import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostImagens() {
  const [form, setForm] = useState({
    pag_num: '',
    imag_url: '',
    cap_id: '',
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

  const addImagem = async () => {
    try {
      await axios.post('http://localhost:3001/imagem', form);
      navigate('/imagens'); // Navegar de volta para a página de listagem de imagens após a adição da imagem
    } catch (error) {
      setError('Erro ao adicionar a imagem');
      console.error('Error adding image:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Nova Imagem</h2>
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

        <button type="button" onClick={addImagem}>
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default PostImagens;
