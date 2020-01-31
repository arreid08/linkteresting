import React, { useState } from 'react'
import './DeleteCollection.css'
import { Link, Redirect } from 'react-router-dom'

function DeleteCollection(props) {
    
    const [collection, setCollection] = useState([])
    const [done, setDone] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        let id = props.state.match.params.collectionId
        fetch(`https://list-links.herokuapp.com/api/collection/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setCollection(res)
            }, [])
            .then(res => {
                props.refreshCollections()
            })
            .catch((error) => {
                console.log("error", error)
            })
        setDone(true)
    }

    return (
        <div className='Delete'>
            <p className="dc-p">are you sure you want to delete this collection?</p>
            <div className=".btn-group-justified p-3 m-6">
                <button
                    className="buttonb"
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                >Submit
                </button>
                <Link to='/user-home'>
                    <button
                        className="buttonb"
                        type="submit"
                        value="Cancel"
                    >Cancel
                    </button>
                </Link>
            </div>
            {done ? <Redirect push to='/user-home' /> : null}
        </div>
    )
}

export default DeleteCollection