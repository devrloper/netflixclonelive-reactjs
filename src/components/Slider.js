import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const movies = [
  { src: './large-movie1.jpg', description: 'Description for movie 1', videoUrl: 'https://www.youtube.com/embed/video1' },
  { src: './large-movie2.jpg', description: 'Description for movie 2', videoUrl: 'https://www.youtube.com/embed/video2' },
  // Add more movies as needed
];

const SliderComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const openModal = (movie) => {
    setCurrentMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentMovie(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} onClick={() => openModal(movie)} style={{ cursor: 'pointer' }}>
            <img src={movie.src} alt={`Movie ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>

      {currentMovie && (
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          style={{ 
            overlay: { 
              backgroundColor: 'rgba(0, 0, 0, 0.8)' // Darken the background
              
            },
            content: { 
              width: '80%', 
              margin: 'auto', 
              padding: '20px',
              borderRadius: '8px'
            } 
          }}
        >
          <button onClick={closeModal} style={{ float: 'right', fontSize: '1.5rem'  }}>Close</button>
          <div>
            <iframe width="100%" height="315" src={currentMovie.videoUrl} title="Video" frameBorder="0" allowFullScreen></iframe>
            <p>{currentMovie.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SliderComponent;
