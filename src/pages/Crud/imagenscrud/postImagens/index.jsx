import React, { useState } from 'react';
import axios from 'axios';

function CreateImagem() {
  const [form, setForm] = useState({
    pag_num: '',
    imag_url: '',
    cap_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/imagens', form);
      // Limpar o formulário após a criação da imagem
      setForm({
        pag_num: '',
        imag_url: '',
        cap_id: '',
      });
    } catch (error) {
      console.error('Error creating imagem:', error);
    }
  };

  return (
    <div>
      <h2>Criar Imagem</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default CreateImagem;
