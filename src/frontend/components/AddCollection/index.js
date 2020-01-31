import React, { useState } from 'react'
import './AddCollection.css'
import { Link, Redirect } from 'react-router-dom'

function AddCollection(props) {

  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [done, setDone] = useState(false)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: title,
      description: description
    }

    fetch(`http://list-links.herokuapp.com/api/collection/${props.state.location.user._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      props.refreshCollections(props.state.location.user._id)
    })
    .then(() => {
      setDone(true)
    })
  }

  return (
    <>
      <h4>ADD COLLECTION</h4>
      <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
        <label className="label">
          Title: <input className="text-box" type="text" onChange={handleChangeTitle} />
        </label>
        <br />
        <label className="label">
          Description: <input className="text-box" type="text" onChange={handleChangeDescription} />
        </label>
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
      <Link to='/user-home'>
        <button
          className="button"
          type="submit"
          value="Cancel"
        >Cancel
        </button>
      </Link>
      {done ? <Redirect push to='/user-home' /> : null}
    </>
  )
}

export default AddCollection