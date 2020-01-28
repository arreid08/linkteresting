import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import './Login.css'

function Login() {

    const [user, setUser] = useState([])
    const [userDetails, setUserDetails] = useState([])

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const getUser = (username) => {
        fetch(`http://list-links.herokuapp.com/api/user/name/${username}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUserDetails(res)
                results = true
            }, [])
            .catch((error) => {
                console.log("error", error)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getUser(user)
    }

    return (
        <div>
            <p>Linkteresting is a place to store all your bookmarks in categories so you never lose them.</p>
            <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    <label className="label">
                    Username: <input className="form-control" type="text" onChange={handleChangeUser} />
                    </label>
                </div>
                <br/>
                <input className="button" type="submit" value="Log In" />
            </form>
            {userDetails.username ? <Redirect push to={{
                pathname: '/user-home',
                userDetails: userDetails
            }} /> : ""}
        </div>
    )
}

export default Login