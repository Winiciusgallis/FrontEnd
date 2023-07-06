import React from 'react';
import { Link } from 'react-router-dom';

function ListItemImage({ id, pag_num, imag_url }) {
  return (
    <li style={{ listStyleType: 'none' }} key={id}>
      <Link to={`/imagens/details/${id}`}>
        <img src={imag_url} alt={`Página ${pag_num}`} style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }} />
      </Link>
    </li>
  );
}

export default ListItemImage;
