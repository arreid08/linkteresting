import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Collection.css'


function Collection(props) {

    console.log("collection props", props)
    const [links, setLinks] = useState([])
    const [collection, setCollection] = useState([])

    useEffect(() => {
        if (props.state.location) {
            if (props.state.location.collection) {
                props.setActive(props.state.location.collection)
                setCollection(props.state.location.collection)
            } else { setCollection(props.getActive()) }
        }
        props.getLinkList(props.state.location.id)
            .then(res => {
                setLinks(res)
            })
    }, [])

    console.log("links", links)
    console.log("collection", collection)

    return (
        <div>
            <h4>{collection.title}</h4>
            <nav className="btn-group btn-group-justified">
                <Link
                    to={{
                        pathname: '/add-link',
                        links: links
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
                     <h6>Collection: {collection.description}</h6>
                        <div className="btn-group">
                  
                        {console.log("This is links",links)}
                        {links.map((item) => (
                            <div className="link-list">
                            <a href={item.link} target="blank">{item.title}</a>
                            </div>
                            ))}

                                <ul className="dropdown-menu" role="menu">
                                    <li>Edit</li>
                                    <li><Link to="/edit-link">Edit</Link></li>
                                    <li><Link to="/delete-link">Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Collection