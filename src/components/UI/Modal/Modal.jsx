import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

function Modal({children, show, close}) {
  return (
    <>
      <Backdrop show={show} close={close} />
      <div className={`modal${show ? " show" : ""}`}>{children}</div>
    </>
  );
}

export default Modal
