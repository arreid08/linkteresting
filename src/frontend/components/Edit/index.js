import React from 'react'
import React, { useState, useEffect } from 'react' 
import './Edit.css'

// reference AddLink 
function Edit(props) {
  const [collection, editCollection] = useState([])

  const handleSubmit = (e) => {
      e.preventDefault()
  
      fetch(`http://list-links.herokuapp.com/api/collection/${props.collectionId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((res) => {
          editCollection(res)
          console.log('res', res)
      }, [])
      .catch((error) => {
          console.log("error", error)
      })
}

  return (
    <div className='Edit'>
        <p>Edit Collection</p>
        <div className=".btn-group-justified">
            <button 
                className="button" 
                type="submit" 
                value="Submit"
                onClick={handleSubmit}
            >Submit
            </button>
            <Link to='/user-home'>
                <button
                    className="button" 
                    type="submit" 
                    value="Cancel"
                    >Cancel
                </button>
            </Link>
        </div>
    </div>
)
}

export default Edit