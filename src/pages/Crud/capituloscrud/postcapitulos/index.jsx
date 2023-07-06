import React, { useState } from 'react';
import axios from 'axios';

function CreateCapitulo() {
  const [form, setForm] = useState({
    nomemanga: '',
    cap_num: '',
    manga_id: '',
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
      await axios.post('http://localhost:3001/capitulos', form);
      // Limpar o formulário após a criação do capítulo
      setForm({
        nomemanga: '',
        cap_num: '',
        manga_id: '',
      });
    } catch (error) {
      console.error('Error creating capitulo:', error);
    }
  };

  return (
    <div>
      <h2>Criar Capítulo</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default CreateCapitulo;
