import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeleteImagem() {
  const { id } = useParams();

  useEffect(() => {
    const deleteImagem = async () => {
      try {
        await axios.delete(`http://localhost:3001/imagens/${id}`);
        // Redirecionar para a página de lista de imagens após a exclusão
        window.location.href = '/imagens';
      } catch (error) {
        console.error('Error deleting imagem:', error);
      }
    };

    deleteImagem();
  }, [id]);

  return (
    <div>
      <h2>Excluindo Imagem...</h2>
    </div>
  );
}

export default DeleteImagem;
