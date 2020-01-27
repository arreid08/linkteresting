import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import './Login.css'

function Login() {
    const [user, setUser] = useState([])
    // const [password, setPassword] = useState([])

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    // const handleChangePassword = (e) => {
    //     setYear(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        return(
            // send user to the user home page
            <Redirect to='/userhome' />
        )
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
                {/* <label className="label">
                Password: <input className="text-box" type="text" onChange={handleChangePassword} />
                </label>
                <br/> */}
                <input className="button" type="submit" value="Log In" />
            </form>
        </div>
    )
}

export default Login