import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de recherche, par exemple une redirection ou un appel d'API
    console.log('Recherche pour:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BookBuddy</Link>
      </div>
      <div className="navbar-links">
        <Link to="/accueil">Accueil</Link>
        <Link to="/livres">Livres</Link>
        <Link to="/favoris">Favoris</Link>
        <Link to="/profil">Profil</Link>
      </div>
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Rechercher</button>
      </form>
    </nav>
  );
};

export default Navbar;




