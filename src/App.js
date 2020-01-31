import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from './frontend/components/Header'
import Login from './frontend/components/Login'
import UserHome from './frontend/components/UserHome'
import Edit from './frontend/components/Edit'
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

  getCollections = (id) => {
    return new Promise((resolve, reject) => {
      // let id = this.state.user._id
      console.log("getCollections id ", id)
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
    console.log("handle login id ", id)
    this.getUser(id)
      .then(res => {
        console.log("got user", res)
        let user = res
        this.getCollections(res._id)
          .then(res => {
            console.log("got collections ", res)
            this.setState({
              collections: res,
              gotUser: true,
              user: user
            })
            console.log("state ", this.state)
          })
      })


      .catch(error => { console.log(error) })
  }

  refreshCollections = () => {
    this.getCollections()
      .then(res => {
        this.setState({ collections: res })
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
    return new Promise((resolve, reject) => {
      console.log("refreshLinks ", id)
      this.getLinks(id)
        .then(res => {
          this.setState({ links: res })
        })
        .then(res => {
          console.log("from refresh links", this.state.links)
        })
        .then(res => resolve("done"))
        .catch(error => console.log(error))
    })

  }

  setActive = (obj) => {
    this.setState({
      active: obj
    })
  }

  getActive = () => {
    return this.state.active
  }

  getActiveLinks = () => {
    return this.state.links
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" render={props => <Login handleLogin={this.handleLogin} />} exact />
            <Route path="/user-home" render={props => <UserHome getDetails={this.getDetails} state={props} />} />
            <Route path="/add-collection" render={props => <AddCollection getActive={this.getActive} refreshCollections={this.refreshCollections} state={props} />} />
            <Route path="/delete-collection/:collectionId" render={props => <DeleteCollection refreshCollections={this.refreshCollections} state={props} />} />
            <Route path="/collection-details" render={props => <Collection setActive={this.setActive} getActive={this.getActive} getLinkList={this.getLinkList} getActiveLinks={this.getActiveLinks} state={props} />} />
            <Route path="/delete-link/" render={props => <DeleteLink state={props} refreshLinks={this.refreshLinks} />} />
            <Route path="/add-link" render={props => <AddLink refreshLinks={this.refreshLinks} state={props} />} />
            <Route path="/edit-link/" render={props => <Edit getActiveLinks={this.getActiveLinks} refreshLinks={this.refreshLinks} state={props} />} />
          </Switch>
          {this.state.gotUser ? <Redirect push to="/user-home" /> : null}
        </main>
      </div>
    )
  }
}

export default App