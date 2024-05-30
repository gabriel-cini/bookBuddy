import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/livrest">Livres</Link>
        </li>
        <li>
          <Link to="/favoris">Favoris</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
