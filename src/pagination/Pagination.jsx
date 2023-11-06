import React from 'react'
import { range } from '../utils/utils'

export default function Pagination({ total, limit, currentPage, selectPage }) {
  const pageCount = Math.ceil(total / limit)
  const pages = range(1, pageCount + 1)
  return (
    <ul className='pagination'>
      {pages.map((page) => (
        <li
          data-testid="page-container"
          key={page}
          onClick={() => selectPage(page)}
          className={`page-link ${currentPage === page ? 'active' : ''}`}
        >
          <span className='page-link'>{page}</span>
        </li>
      ))}
    </ul>
  )
}
