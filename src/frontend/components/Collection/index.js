import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Collection.css'

function Collection(props) {

    console.log("collection props", props)
    const [links, setLinks] = useState([])


    useEffect(() => {
        props.getLinkList("5e31c729a725b400041655bb")
            .then(res => {
                setLinks(res)
                console.log("Links ", links)
            })

        // fetchAllLinks()
    }, [])

    //console.log("this is get details ", props.getDetails())

    const fetchAllLinks = () => {
        fetch('http://list-links.herokuapp.com/api/link')
            .then(res => res.json())
            .then(res => {
                setLinks(res)
            }, [])
            .catch((error) => {
                console.log("error", error)
            })
    }

    console.log("links", links)

    return (
        <div>
            <h4>Collection Name Here</h4>
            <nav className="btn-group btn-group-justified">
                <Link
                    to={{
                        pathname: '/add-link',
                        links: links,
                        fetchAllLinks: { fetchAllLinks }
                    }}
                    className="btn-group">
                    <button className="btn btn-dark btn-md mb-5">New Link</button>
                </Link>
                <Link to="/user-home" className="btn-group">
                    <button className="btn btn-dark btn-md mb-5">Go Back</button>
                </Link>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="btn-group">
                            <li><Link to={links.link}>{links.title}</Link></li>
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>Edit</li>
                                    <li><Link to="/edit-link">Edit</Link></li>
                                    <li><Link to="/delete-link">Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-4">
                        <li><a href="#">Links here..</a></li>
                    </div>
                    <div className="col-sm-4">
                        <li><a href="#">Links here..</a></li>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Collection