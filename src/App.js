import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import BookCarousel from './BookCarousel';
import FavoritesPage from './FavoritesPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([
    {
      title: 'Les Misérables',
      author: 'Victor Hugo',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716814675-9782075128063-1-75.jpg',
    },
    {
      title: 'Harry Potter',
      author: 'J.K Rowling',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716814902-71n6sgknlcl-ac-uf1000-1000-ql80.jpg',
    },
    {
      title: 'Les Trois Mousquetaires',
      author: 'Alexande Dumas',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716816815-81afb2bvial-ac-uf1000-1000-ql80.jpg',
    },
    {
      title: 'Le Comte de Conte-Cristo',
      author: 'Alexandre Dumas',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716817037-a64513.jpg',
    },
    {
      title: 'Kirikou et la Sorcière',
      author: 'Michel Ocelot',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716817683-23-9782013227452-1-75.jpg',
    },
    {
      title: 'Chaire de Poule Prisonnier du miroir',
      author: 'R.L Stine',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716818114-81zcwydwowl-ac-uf1000-1000-ql80.jpg',
    },
  ]);

  const [favoriteBooks, setFavoriteBooks] = useState([
    {
      title: 'Les Misérables',
      author: 'Victor Hugo',
      imageUrl: 'https://image.noelshack.com/fichiers/2024/22/1/1716814675-9782075128063-1-75.jpg',
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/accueil" element={<Home books={books} />} />
          <Route path="/livres" element={<Books books={books} />} />
          <Route path="/favoris" element={<FavoritesPage favoriteBooks={favoriteBooks} />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = ({ books }) => (
  <div>
    <h1>Livres</h1>
    <BookCarousel books={books} />
  </div>
);

const Books = ({ books }) => (
  <div>
    <h1>Liste des Livres</h1>
    
  </div>
);

const Profile = () => (
  <div>
    <h1>Profil</h1>
    
  </div>
);

export default App;




