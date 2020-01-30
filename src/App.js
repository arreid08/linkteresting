import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      collections: [],
      links: [],
      active: {},
      gotUser: false
    }
  }

  getCollections = () => {
    return new Promise((resolve, reject) => {
      let id = this.state.user._id
      fetch(`http://list-links.herokuapp.com/api/collection/s/${id}`)
        .then(res => res.json())
        .then(res => {
          resolve(res)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  getUser = (name) => {
    return new Promise((resolve, reject) => {
      fetch(`http://list-links.herokuapp.com/api/user/name/${name}`)
        .then(res => res.json())
        .then(res => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  handleLogin = (id) => {
    this.getUser(id)
      .then(res => {
        console.log("got user", res)
        this.setState({
          user: res
        })
      })
      .then(res => {
        this.getCollections()
          .then(res => {
            console.log("got collections ", res)
            this.setState({
              collections: res,
              gotUser: true
            })
            console.log("state ", this.state)
          })
      })

      .catch(error => { console.log(error) })
  }

  refreshCollections = () => {
    this.getCollections()
      .then(res => {
        this.setState({ collecions: res })
      })
  }

  getDetails = () => {
    return {
      user: this.state.user,
      collections: this.state.collections
    }
  }

  getLinks = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`http://list-links.herokuapp.com/api/link/s/${id}`)
        .then(res => res.json())
        .then(res => {
          resolve(res)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  getLinkList = (id) => {
    return new Promise((resolve, reject) => {
      this.getLinks(id)
        .then(res => {
          console.log("got links ", res)
          this.setState({
            links: res
          })
          resolve(res)
        })
        .catch(error => { reject(error) })
    })
  }

  refreshLinks = (id) => {
    this.getLinks(id)
      .then(res => {
        this.setState({ links: res })
      })
  }

  setActive = (obj) => {
    this.setState({
      active: obj
    })
  }

  get = () => {
    return this.state.active
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" render={props => <Login handleLogin={this.handleLogin} />} exact />
            <Route path="/user-home" render={props => <UserHome getDetails={this.getDetails} state={props} />} />
            <Route path="/add-collection" component={AddCollection} />
            <Route path="/delete-collection/:collectionId" render={props => <DeleteCollection refreshCollections={this.refreshCollections} state={props} />} />
            <Route path="/collection-details" render={props => <Collection setActive={this.setActive} getActive={this.getActive} getLinkList={this.getLinkList} state={props} />} />
            <Route path="/add-link" component={AddLink} />
            <Route path="/delete-link/:linkId" render={props => <DeleteLink state={props} refreshLinks={this.refreshLinks} />} />
          </Switch>
          {this.state.gotUser ? <Redirect push to="/user-home" /> : null}
        </main>
      </div>
    )
  }
}

export default App