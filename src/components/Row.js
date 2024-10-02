import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Set the app element for accessibility
Modal.setAppElement('#root');

const Row = ({ title, imageUrls, isLarge }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="row" style={{ marginBottom: '30px' }}>
      <h2>{title}</h2>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} style={{ padding: '0 10px' }} onClick={() => openModal(url)} >
            <img 
              src={url} 
              alt={`${title} Poster`} 
              className={`row_poster ${isLarge ? 'row_posterLarge' : ''}`} 
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
            />
          </div>
        ))}
      </Slider>

      {currentImage && (
        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          style={{ 
            content: { 
              width: '30%', 
              margin: 'auto', 
              padding: '20px',
              borderRadius: '8px',
              backgroundColor:"black"
            } 
          }}
        >
          <button onClick={closeModal} style={{ float: 'right', fontSize: '1.5rem' }}>×</button>
          <div>
            <img src={currentImage} alt="Current" style={{ width: '100%' }} />
          </div>
        </Modal>
      )}
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLarge: PropTypes.bool,
};

Row.defaultProps = {
  isLarge: false,
};

export default Row;
