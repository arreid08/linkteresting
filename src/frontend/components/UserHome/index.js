import React from 'react'
// import Collection from './Collection'
import './UserHome.css'
import { Link } from 'react-router-dom';

function UserHome() {
  // const { user } = props;
  // const [user, setUser] = useState([])

  // useEffect(() => {
  //   fetchUserInfo()
  // }, [])

  // const fetchUserInfo = () => {
  //   fetch('http://localhost:3000/')
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
    
    <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h2> 
                    UserName Collections
                </h2>
                <h5>  </h5>
                <p className="card-text">
                    Users
                </p>
                <Link to= '/collection' className="btn btn-secondary btn-xs btn-block">
                    Collection
                </Link>   
            </div> 
        </div>
    </div>
                <Link to= '/delete-collection' className="btn btn-secondary btn-xs btn-block">
                  Delete A Collection
                </Link>
    </>
)
}



export default UserHome