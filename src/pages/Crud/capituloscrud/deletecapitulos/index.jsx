import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeleteCapitulo() {
  const { id } = useParams();

  useEffect(() => {
    const deleteCapitulo = async () => {
      try {
        await axios.delete(`http://localhost:3001/capitulos/${id}`);
        // Redirecionar para a página de lista de capitulos após a exclusão
        window.location.href = '/capitulos';
      } catch (error) {
        console.error('Error deleting capitulo:', error);
      }
    };

    deleteCapitulo();
  }, [id]);

  return (
    <div>
      <h2>Excluindo Capítulo...</h2>
    </div>
  );
}

export default DeleteCapitulo;
