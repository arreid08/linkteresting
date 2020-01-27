import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './frontend/components/Header'
import Login from './frontend/components/Login'
// import Edit from './frontend/components/Edit'
// import Add from './frontend/components/Add'
// import Delete from './frontend/components/Delete'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
