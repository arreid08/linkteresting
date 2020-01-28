import React from 'react'
import './DeleteCollection.css'
import { Link, Redirect } from 'react-router-dom'

function DeleteCollection(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
    
        fetch(`http://list-links.herokuapp.com/api/collection`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then(() => {
          props.fetchAllCollections()
          return(
            <Redirect push to='/user-home' />
          )
        })
      }
    
    return (
        <div className='Delete'>
            <p>Are you sure you want to delete this collection?</p>
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
    
export default DeleteCollection