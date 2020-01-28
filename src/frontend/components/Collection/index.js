import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Collection.css'

function Collection() {

    const [links, setLinks] = useState([])
  
    useEffect(() => {
        fetchAllLinks()
    }, [])
  
    const fetchAllLinks = () => {
        fetch('list-links.herokuapp.com/api/link')
            .then(res => res.json())
            .then(res => {
                setLinks(res)
            }, [])
            .catch((error) => {
                console.log("error", error)
            })
    }

  return (
    <div>
        <h4>Collection Name Here</h4>
        <nav className="btn-group btn-group-lg">
            <Link to={{
                    pathname: '/add-link',
                    links: links,
                    fetchAllLinks: {fetchAllLinks}
                    }}>
                <button>New Link</button>
            </Link>
            <Link to="/user-home">
                <button>Go Back</button>
            </Link>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <li><a href="#">Links here..</a></li>
                </div>
                <div className="col-sm-4">
                    <li><a href="#">Links here..</a></li>
                </div>
                <div className="col-sm-4">
                    <li><a href="#">Links here..</a></li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collection