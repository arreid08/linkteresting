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

    fetch(`https://list-links.herokuapp.com/api/link/${props.state.location.collectionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        props.refreshLinks(props.state.location.collectionId)
          .then(() => {
            setDone(true)
          })
      })
  }

  return (
    <>
      <h6 className="AddTitle">ADD LINK</h6>
      <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
        <label className="AddLabel">
          Title: <input className="text-box" type="text" placeholder="enter title" onChange={handleChangeTitle} />
        </label>

        <label className="AddLabel">
          Link: <input className="text-box" type="text" placeholder="enter link" onChange={handleChangeLink} />
        </label>
        <br />
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