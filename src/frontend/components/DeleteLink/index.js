import React from 'react'
import './DeleteLink.css'
import { Link, Redirect } from 'react-router-dom'

function DeleteLink(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
    
        fetch(`http://list-links.herokuapp.com/api/link`, {
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
            <p>Are you sure you want to delete this link?</p>
            <div className=".btn-group-justified">
                <button 
                    className="button" 
                    type="submit" 
                    value="Submit"
                    onClick={handleSubmit}
                >Submit
                </button>
                <Link to='/collection-details'>
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
    
export default DeleteLink