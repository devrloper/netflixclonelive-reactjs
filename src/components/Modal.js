import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button style={closeButtonStyles} onClick={onClose}>X</button>
        <img src={image} alt="modal-content" style={{ width: '100%', height: 'auto' }} />
        <p>Description about the image</p>
        <button>Get Started</button>
      </div>
    </div>,
    document.body
  );
};

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const modalContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  position: 'relative'
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer'
};

export default Modal;
