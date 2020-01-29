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
      console.log(this.state.collections)
      return (
        <>
          <Link to="/collection-details" className="card-body" >
            <h2>
              {this.state.collections.title}
            </h2>
            <h5>  </h5>
            <h4 className="card-text">
              {this.state.collections.description}
            </h4>
            <Link to={`/delete-collection/${this.state.collections._id}`} className="btn btn-dark btn-md mb-5">
              Delete A Collection
                        </Link>
          </Link>
        </>
      )
    } else return (<h2> Loading...</h2>)
  }


  render() {
    return (
      <>
        {/* // map here, 
                // another return that will return this div
            */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            {this.renderPage()}
          </div>
        </div>
        {/*     TO INCORPORATE:
            <div className="UserHome">
                  {props.collection.map(collection => {
                return(
                  <div className="collection">
                    <div className="title">{props.location.userDetails.collections}</div>
                    <div className="description">{props.location.userDetails.collections}</div>
               </div>
                )
                })}
            </div> */}
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