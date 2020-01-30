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
      console.log("hello from component did update")
      let newState = this.props.getDetails()
      this.setState({ ...newState })
    }
  }

  renderPage = () => {
    console.log(this.props)
    if (this.state.collections) {
      console.log("this is this.state.collections:", this.state.collections)
      console.log("this is this.state.collections.description:", this.state.collections.values)
      return (
        <div className="card-body">
          <span>
            {this.state.collections.map(item => (
              <Link to="/collection-details"
              >
                  {/* className="card-body" */}
                <h2>
                  {item.title}
                </h2>
                <h4 className="card-text">
                  {item.description}
                </h4>
                
                <Link to={{
                  pathname: `/delete-collection/${item._id}`,
                  id: item._id}}
                  className="btn btn-dark btn-md mb-5">
                  Delete A Collection
                    </Link>
                    <hr></hr>
                    <br></br><br></br>
              </Link>
            ))}
          </span>
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

// {/* <Link to='/collection-details' className="card-body">
          //   <h2>
          //     {col.title}
          //   </h2>
          //   <h5>  </h5>
          //   <h4 className="card-text">
          //     {col.description}
          //   </h4>
          //   <Link to={`/delete-collection/${col._id}`} className="btn btn-dark btn-md mb-5">
          //     Delete A Collection
          // </Link>
          // </Link> */}