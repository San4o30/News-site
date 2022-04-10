import React from 'react'

function Pagination({newsPerPage, totalNews, paginate}) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination" style={{marginTop:'30px', justifyContent:'center'}}>
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a href="#" className='page-link' onClick={() => paginate(number)}>{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination