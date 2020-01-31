import React, { Component } from 'react'
import './UserHome.css'
import { Link } from 'react-router-dom';

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      collections: this.props.userCollections,
    }
  }

  componentDidMount() {
    let newState = this.props.getDetails()
    this.setState({ ...newState })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location) {
      let newState = this.props.getDetails()
      this.setState({ ...newState })
    }
  }

  renderPage = () => {
    if (this.state.collections) {
      console.log("this is this.state.collections:", this.state.collections)
      console.log("this is this.state.collections.description:", this.state.collections.values)
      return (
        <div className="collections">
            <div className="uh-header">
              <h1 className="collect-title">
                {this.state.user.username}'s collections 
              </h1>
              <Link to={{
                    pathname: '/add-collection',
                    collection: this.state.collections,
                    user: this.state.user
                    }}
                    className="btn btn-dark btn-md mb-5">
                    add collection
              </Link>
            </div>
            {this.state.collections.map((item,i) => (
              <div className="card-body" key={i}>
                <Link to={{
                  pathname: `/collection-details/`,
                  id: item._id,
                  collection: item}}>
                    {/* className="card-body" */}
                  <h2 className="title">
                    {item.title}
                  </h2>

                  <h4 className="card-text">
                    {item.description}
                  </h4>

                  </Link>
                  <Link to={{
                    pathname: `/delete-collection/${item._id}`,
                    id: item._id}}
                    className="btn btn-dark btn-md mb-5">
                    delete collection
                  </Link>
              </div>
            ))}
          
        </div>
      )
    } else return (<h2> Loading...</h2>)
  }


  render() {
    return (
      <>
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            {this.renderPage()}
          </div>
        </div>
      </>
    )
  }
}
export default UserHome