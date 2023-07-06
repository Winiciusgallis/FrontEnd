import React from 'react';
import { Link } from 'react-router-dom';

function ListItem2({ id, nomemanga, cap_num, mangaId }) {
  return (
    <>
      <li key={id}>
        <Link to={`/capitulos/${mangaId}/imagens/${id}`}>{`${nomemanga} - Capítulo ${cap_num}`}</Link>
      </li>
    </>
  );
}

export default ListItem2;
