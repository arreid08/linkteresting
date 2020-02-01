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
    }, [])
    return (
        <div>
            <h6 className="titleColl">{collection.title}</h6>
            <nav className="btn-group btn-group-justified">
                <Link to="/user-home" className="btn-group">
                    <button className="btn btn-dark">Go Back</button>
                </Link>
                <br />
                <Link
                    to={{
                        pathname: '/add-link',
                        links: links,
                        collectionId: collection._id
                    }}
                    className="btn-group">
                    <button className="btn btn-dark">New Link</button>
                </Link>
            </nav>

            <div className="containerC text-center">
                <div className="col text-center">
                    <div className="col-sm-4 text-center">
                        <h6 className="descColl">{collection.description}</h6>
                        <div className="btn-group text-center linkbutt">
                            {links.map((item,i) => (
                                <ul className="link-list" key={i}>
                                    <li>
                                    <a href={item.link} target="blank">{item.title}</a>
                                    < br/>
                                    <div className="btn-group btn-group-justified butts">
                                    <Link to={{
                                        pathname: "/edit-link",
                                        linkId: item._id,
                                        link: item,
                                        collectionId: collection._id
                                    }}>Edit</Link>
                                    </div>

                                    <div className="btn-group btn-group-justified butts">
                                    <Link to={{
                                        pathname: "/delete-link",
                                        id: item._id,
                                        collectionId: collection._id
                                    }}>Delete</Link>
                                    </div>
                                    </li>

                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collection