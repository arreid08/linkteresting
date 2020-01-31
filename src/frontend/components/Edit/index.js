import React, { useState, useEffect } from 'react'
import './Edit.css'
import { Link, Redirect } from 'react-router-dom'
function Edit(props) {
  const [title, setTitle] = useState([])
  const [link, setLink] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    setTitle(props.state.location.link.title)
    setLink(props.state.location.link.link)
  }, [])

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
    console.log("link id", props.state.location.linkId)
    console.log("data ", data)
    console.log("title and link ", title, link)
    const url = `https://list-links.herokuapp.com/api/link/${props.state.location.linkId}`
    console.log("url ", url)
    fetch(url, {
      method: 'PUT',
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
      {/* what exactly is our header here??  */}
      <h4>Edit</h4>
      <form className="form" action="/action_page.php" onSubmit={(e) => handleSubmit(e)} method="post">
        <label className="label">
          Title: <input className="text-box" type="text" onChange={handleChangeTitle} value={title} />
        </label>
        <br />
        <label className="label">
          Link: <input className="text-box" type="text" onChange={handleChangeLink} value={link} />
        </label>
        <br />
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

