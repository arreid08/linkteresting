import React from 'react'
// import Collection from './Collection'
import './UserHome.css'

function UserHome() {

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
    <div class="Header">
          <h1 class="text-center mb-4">Username Collections</h1>
          <div class="container my-container">
            <div class="row my-row">
              <div class="col-lg my-col">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
            </div>

            <div class="row my-row">
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
            </div>

            <div class="row my-row">
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
              <div class="col-lg">Collection</div>
            </div>
          </div>
    </div>
  )
}

export default UserHome