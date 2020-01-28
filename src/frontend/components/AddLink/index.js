import React, { useState } from 'react'
import './AddLink.css'
import { Link, Redirect } from 'react-router-dom'

function AddLink(props) {

  const [title, setTitle] = useState([])
  const [link, setLink] = useState([])
  // const [tag, setTag] = useState([])

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeLink = (e) => {
    setLink(e.target.value)
  }

  // const handleChangeTag = (e) => {
  //   setTag(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: title,
      link: link
      // tag: tag
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
      // update the state with all links so that it
      // includes the newly added link
      props.fetchAllLinks()
      return(
        // redirect user to the list of all links
        // props.history.push('/collection_details')
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
        {/* <label className="label">
          Tag: <input className="text-box" type="text" onChange={handleChangeTag} />
        </label>
        <br/> */}
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