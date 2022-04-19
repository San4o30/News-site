import React from 'react'
// import BackDrop from './BackDrop';
import './Modal.css';

function Modal({ modalInfo, closeModal, displayModal }) {




  const divStyle = {
    display: displayModal ? 'block' : 'none',
  };

  return (
    <div
      className="modal"
      onClick={closeModal}
      style={divStyle}>

      <div className="modal-content"
        onClick={e => e.stopPropagation()}>

        <span
          className="close"
          onClick={closeModal}>&times;
        </span>

        <div className="modal-flex">
          <button>Удалить</button>
        </div>

      </div>

    </div>
  );
}



export default Modal