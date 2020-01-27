import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './frontend/components/Header'
import Login from './frontend/components/Login'
import UserHome from './frontend/components/UserHome'
// import Edit from './frontend/components/Edit'
// import Add from './frontend/components/Add'
// import Delete from './frontend/components/Delete'

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const fetchUserInfo = () => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(res => {
        setUser(res)
      }, [])
      .catch((error) => {
        console.log("error", error)
      })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>

          <Route path="/" exact>
            <Login />
          </Route>

          <Route
            path="/userhome"
            render={props => (
              <UserHome
                {...props}
                user={user}
              />
            )}
          ></Route>
          
        </Switch>
      </main>
    </div>
  )
}

export default App
