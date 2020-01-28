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
          <Route path="/" component={Login} exact />
          <Route path="/user-home" component={UserHome} />
          <Route path="/add-collection" component={AddCollection} />
          <Route path="/add-link" component={AddLink} />
          <Route path="/collection-details" component={Collection} />
          <Route path="/delete-collection/:collectionId" component={DeleteCollection} />
          <Route path="/delete-link/:linkId" component={DeleteLink} />
        </Switch>
      </main>
    </div>
  )
}

export default App
