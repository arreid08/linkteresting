import React, { useState, useEffect } from 'react' 
import './Edit.css'
import { Link, Redirect } from 'react-router-dom'

function Edit(props) {

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
    })
    .then(() => {
      setDone(true)
    })
  }

  const fetchLinkTitle = (id) => {
    const foundT = props.links.find(d => d._id === id)
    return foundT && foundT.title
  }

  const fetchLink = (id) => {
    const foundL = props.links.find(d => d._id === id)
    return foundL && foundL.link
  }

  console.log("edit title", title)
  console.log("edit link", link)

  return (
    <>
    {/* what exactly is our header here??  */}
      <h4>Edit</h4>
      <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
        <label className="label">
          Title: <input className="text-box" type="text" onChange={handleChangeTitle} defaultValue={fetchLinkTitle(props.state.location.collectionId)} />
        </label>
        <br/>
        <label className="label">
          Link: <input className="text-box" type="text" onChange={handleChangeLink} defaultValue={fetchLink(props.state.location.collectionId)} />
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
      {done ? <Redirect push to='/collection-details' /> : null}
    </>
  )
}

export default Edit