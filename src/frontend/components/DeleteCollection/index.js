import React, { useState, useEffect } from 'react'
import './DeleteCollection.css'
import { Link, Redirect } from 'react-router-dom'

function DeleteCollection(props) {
    const [collection, setCollection] = useState([])
    const [done, setDone] = useState(false)
    console.log("done", done)
    // setDone(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let id = "5e32076400af20001717d958"
        fetch(`http://list-links.herokuapp.com/api/collection/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setCollection(res)
                console.log('res', res)
            }, [])
            .then(res => {
                props.refreshCollections()
            })
            .catch((error) => {
                console.log("error", error)
            })
        setDone(true)
    }

    //   return(
    //     <Redirect push to='/user-home' />
    //   )

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
            {done ? <Redirect push to='/user-home' /> : null}
        </div>
    )
}

export default DeleteCollection