import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'
// import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils'

function Login(props) {
    console.log("login props", props.handleLogin)

    const [user, setUser] = useState([])
    const [userDetails, setUserDetails] = useState([])

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    console.log("login", userDetails)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleLogin(user)
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
                <br />
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