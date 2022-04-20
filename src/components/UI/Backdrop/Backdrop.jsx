import React from 'react'

import './Backdrop.css';

function BackDrop({ show, close }) {
  return show ? <div onClick={close} className="back-drop" /> : null;
}

export default BackDrop
