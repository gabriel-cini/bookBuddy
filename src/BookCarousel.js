import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BookCarousel.css'; // Créez ce fichier pour le style du carrousel

const BookCarousel = ({ books }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="book-carousel-container">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="book-slide">
            <img src={book.imageUrl} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookCarousel;
