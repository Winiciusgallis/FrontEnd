import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav>
      <Link to="/" activeClassName="active">Home</Link>
      <Link to="/manga" activeClassName="active">Mangas</Link>
      <Link to="/capitulos" activeClassName="active">Capitulos</Link>
      <Link to="/imagens" activeClassName="active">Imagens</Link>
    </nav>
  );
}

export default Header;
