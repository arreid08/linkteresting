import React, { useState } from 'react'

import './Login.css'


function Login(props) {

    const [user, setUser] = useState([])


    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleLogin(user)
    }

    return (
        <div>
            {/* <p>L I N K T E R E S T I N G   is a place to store all your bookmarks in categories so you never lose them.</p> */}
            <p>a place to store all of your bookmarks in collections so that you’ll never lose them -- at last</p>
            <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    <label className="label">
                        Username: <input className="form-control" type="text" onChange={handleChangeUser} />
                    </label>
                </div>
                <br />
                <input className="button" type="submit" value="login" />
            </form>

        </div>
    )
}

export default Login