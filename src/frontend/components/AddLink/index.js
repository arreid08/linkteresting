import React, { useState } from 'react'
import './AddLink.css'
import { Link, Redirect } from 'react-router-dom'

function AddLink(props) {

  const [title, setTitle] = useState([])
  const [link, setLink] = useState([])

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

    fetch('http://list-links.herokuapp.com/api/link', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(() => {
      props.fetchAllLinks()
      return(
        <Redirect push to='/collection_details' />
      )
    })
  }

  return (
    <>
      <h4>Add a new link</h4>
      <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
        <label className="label">
          Title: <input className="text-box" type="text" onChange={handleChangeTitle} />
        </label>
        <br/>
        <label className="label">
          Link: <input className="text-box" type="text" onChange={handleChangeLink} />
        </label>
        <br/>
        <input className="button" type="submit" value="Submit" />
      </form>
      <Link to='/collection-details'>
        <button
          className="button" 
          type="submit" 
          value="Cancel"
          >Cancel
        </button>
      </Link>
    </>
  )
}

export default AddLink