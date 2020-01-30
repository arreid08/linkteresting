import React, { useState } from 'react'
import './AddLink.css'
import { Link, Redirect } from 'react-router-dom'

function AddLink(props) {

  const [title, setTitle] = useState([])
  const [link, setLink] = useState([])
  const [done, setDone] = useState(false)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeLink = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: title,
      link: link
    }

    fetch(`http://list-links.herokuapp.com/api/link/${props.state.location.collectionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        props.refreshLinks(props.state.collectionId)
          .then(() => {
            setDone(true)
          })
      })

  }

  return (
    <>
      <h6 className="ALTitle">ADD LINK</h6>
      <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
        <label className="ALlabel">
          Title: <input className="text-box" type="text" placeholder="enter title" onChange={handleChangeTitle} />
        </label>
<<<<<<< HEAD
        <br/>
        <label className="ALlabel">
          Link: <input className="text-box" type="text" placeholder="enter link" onChange={handleChangeLink} />
=======
        <br />
        <label className="label">
          Link: <input className="text-box" type="text" onChange={handleChangeLink} />
>>>>>>> 28dea112a21f40d7cffef25b2c9ee891b4793a3a
        </label>
        <br/>
        <input className="button, butt" type="submit" value="Submit" />
      </form>
      
      <Link to='/collection-details'>
          <button
            className="button" 
            type="submit" 
            value="Cancel"
            >Cancel
          </button>
        </Link>
        {done ? <Redirect push to='/collection-details' /> : null}
      
    </>
  )
}

export default AddLink