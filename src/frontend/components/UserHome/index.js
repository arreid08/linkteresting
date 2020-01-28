import React from 'react'
import './UserHome.css'
import { Link } from 'react-router-dom';


function UserHome(props) {
  console.log('userhome', props);
  //const [user] = useState([])


  const fetchCollection = (id) => {
    fetch(`http://localhost:3000/collection/${id}`)
      .then(res => res.json())
      .then(res => {
        return (res)
      }, [])
      .catch((error) => {
        console.log("error", error)
      })
  }

  const collections = []

  props.props.location.userDetails.collections.forEach(col => {
    fetchCollection(col).then(col => {
      collections.push(col)
    })
  })

  return (
    <>
      {/* // map here, 
    // another return that will return this div
   */}

      <div className="col-md-6">

        <div className="card mb-4 shadow-sm">
          {if (collections.length > 0) {

          }}
          {collections.map(col => {

            <Link to='/collection-details' className="card-body">
              <h2>
                {col.title}
              </h2>
              <h5>  </h5>
              <h4 className="card-text">
                {col.description}
              </h4>
              <Link to={`/delete-collection/${col._id}`} className="btn btn-dark btn-md mb-5">
                Delete A Collection
                </Link>
            </Link>
          })}
          <Link to='/collection-details' className="card-body">
            <h2>
              {props.location.userDetails.title}
            </h2>
            <h5>  </h5>
            <h4 className="card-text">
              *Collection Description*
                </h4>
            <Link to={`/delete-collection/${props.location.userDetails.collections._id}`} className="btn btn-dark btn-md mb-5">
              Delete A Collection
                </Link>
          </Link>
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

export default UserHome