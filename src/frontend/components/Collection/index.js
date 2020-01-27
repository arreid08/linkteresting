import React from 'react'
import { Link } from 'react-router-dom'

import './Collection.css'

function Collection() {
  return (
    <div className="Collection">
        <nav>
            <Link to="/add-link">New Link</Link>
            <Link to="/user-home">Return to User Home Page</Link>
        </nav>
        

    </div>
  )
}

export default Collection