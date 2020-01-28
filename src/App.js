import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './frontend/components/Header'
import Login from './frontend/components/Login'
import UserHome from './frontend/components/UserHome'
// import Edit from './frontend/components/Edit'
import AddCollection from './frontend/components/AddCollection'
import AddLink from './frontend/components/AddLink'
import DeleteCollection from './frontend/components/DeleteCollection'
import DeleteLink from './frontend/components/DeleteLink'
import Collection from './frontend/components/Collection'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/user-home">
            <UserHome />
          </Route>
          <Route path="/add-collection">
            <AddCollection />
          </Route>
          <Route path="/add-link">
            <AddLink />
          </Route>
          <Route path="/collection-details">
            <Collection />
          </Route>
          <Route path="/delete-collection/:collectionId">
            <DeleteCollection />
          </Route>
          <Route path="/delete-link/:linkId">
            <DeleteLink />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
