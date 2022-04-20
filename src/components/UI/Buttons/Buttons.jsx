import React from 'react'
import './Buttons.css'
function Buttons({ cancel, continued }) {
  return (
    <div className=''>
      <h4>Вы уверены что хотите удалить новость?</h4>
      <div className='buttons'>
        <button onClick={cancel} className='cancel-btn' type="btn-danger">
          Отмена
        </button>
        <button onClick={continued} className='continued-btn' type="btn-success">
          Продолжить
        </button>
      </div>
    </div>
  )
}

export default Buttons