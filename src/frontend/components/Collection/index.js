import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Collection.css'


function Collection(props) {

    const [links, setLinks] = useState([])
    const [collection, setCollection] = useState([])

    useEffect(() => {
        console.log(props.state)
        if (props.state.location) {
            if (props.state.location.collection) {
                props.setActive(props.state.location.collection)
                setCollection(props.state.location.collection)
                props.getLinkList(props.state.location.id)
                    .then(res => {
                        setLinks(res)
                    })
            } else {
                setCollection(props.getActive())
                setLinks(props.getActiveLinks())
                console.log("setting data")
            }
        }
    }, [props])

    return (
        <div>
            <h6 className="title">{collection.title}</h6>
            <nav className="btn-group btn-group-justified">
                <Link to="/user-home" className="btn-group">
                    <button className="btn btn-dark btn-md mb-5">Go Back</button>
                </Link>
                <br />
                <Link
                    to={{
                        pathname: '/add-link',
                        links: links,
                        collectionId: collection._id
                    }}
                    className="btn-group">
                    <button className="btn btn-dark btn-md mb-5">New Link</button>
                </Link>
            </nav>
            
            <div className="container">
                {/* <div className="row"> */}
                    <div className="col">
                        <h6>{collection.description}</h6>
                        <div className="btn-group">
                            {links.map((item,i) => (

                                <div className="link-list" key={i}>
                                    <a href={item.link} target="blank">{item.title}</a><br></br>
                                    <Link to={{
                                        pathname: "/edit-link",
                                        linkId: item._id,
                                        link: item,
                                        collectionId: collection._id
                                    }}>Edit</Link>
                                    <Link to={{
                                        pathname: "/delete-link",
                                        id: item._id,
                                        collectionId: collection._id
                                    }}>Delete</Link>
                                </div>
                            //     <div className="link-list" key={i}>
                            //     <a href={item.link} tlirget="blank">{item.title}</a>
                            //     <br></br>
                            //     <div className="btn-group">
                            //     <Link to={{
                            //         pathname: "/edit-link",
                            //         linkId: item._id,
                            //         link: item,
                            //         collectionId: collection._id
                            //     }}>Edit</Link>
                                
                            //     <Link to={{
                            //         pathname: "/delete-link",
                            //         id: item._id,
                            //         collectionId: collection._id
                            //     }}>Delete</Link>
                            //     </div>
                            // </div>
                            ))}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Collection