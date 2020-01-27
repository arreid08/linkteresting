import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <header className="Header">
      <Link to='/' className='link'>
          <h1>Linkteresting</h1>
      </Link>
    </header>
  )
}

export default Header