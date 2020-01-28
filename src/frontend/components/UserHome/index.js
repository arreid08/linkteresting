import React, { useState, useEffect } from 'react' 
import './UserHome.css'
import { Link } from 'react-router-dom';


function UserHome(props) {
  console.log('userhome', props);
  // const [user, setUser] = useState([])

  //  if (props.location.userDetails) {
  //     useEffect(() => {
  //       setUser (props.location.userDetails)
  //     }, [])
  //  }
 

  // const validate = () => {
  //   return props.location.userDetails ? setUser = props.location.userDetails : null
  // }

  // const fetchUserInfo = () => {
  //   fetch('http://localhost:3000/collection')
  //     .then(res => res.json())
  //     .then(res => {
  //       setUser(res)
  //     }, [])
  //     .catch((error) => {
  //       console.log("error", error)
  //     })
  // }




  return (
    <>
    {/* // map here, 
    // another return that will return this div
   */}

    <div className="col-md-6">

        <div className="card mb-4 shadow-sm">

        <Link to= '/collection-details' className="card-body">
                <h2> 
                    *Collection Title*
                </h2>
                <h5>  </h5>
                <h4 className="card-text">
                    *Collection Description*
                </h4>
                <Link to={{
                  pathname: `/delete-collection/${props.location.userDetails.collections[0]}`,
                  collectionId: props.location.userDetails.collections[0] }} 
                  className="btn btn-dark btn-md mb-5">
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