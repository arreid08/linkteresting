import React, { useState } from 'react'
import './DeleteLink.css'
import { Link, Redirect } from 'react-router-dom'

function DeleteLink(props) {
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let id = props.state.location.id
        fetch(`http://list-links.herokuapp.com/api/link/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                props.refreshLinks(props.state.location.collectionId)
                    .then(() => {
                        setDone(true)
                    })
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
            {done ? <Redirect push to='/collection-details' /> : null}
        </div>
    )
}

export default DeleteLink