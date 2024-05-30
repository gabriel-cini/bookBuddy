import React from 'react';
import './FavoritesPage.css'; // Assurez-vous de créer ce fichier pour les styles de la page de favoris

const FavoritesPage = ({ favoriteBooks }) => {
  return (
    <div className="favorites-page">
      <h2>Mes Favoris</h2>
      {favoriteBooks.length === 0 ? (
        <p>Aucun livre favori pour le moment.</p>
      ) : (
        <div className="favorite-books">
          {favoriteBooks.map((book, index) => (
            <div key={index} className="favorite-book">
              <img src={book.imageUrl} alt={book.title} />
              <div className="book-details">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;

