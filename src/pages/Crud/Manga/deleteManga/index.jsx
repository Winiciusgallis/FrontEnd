import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeletaManga({ mangaId }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/mangas/${mangaId}`);
      navigate('/manga'); // Navegar de volta para a página inicial após a exclusão do manga
    } catch (error) {
      setError('Erro ao deletar o manga');
      console.error('Error deleting manga:', error);
    }
  };

  return (
    <div>
      <h2>Deletar Manga</h2>
      <button type="button" onClick={handleDelete}>
        Deletar Manga
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default DeletaManga;
