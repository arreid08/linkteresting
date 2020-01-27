import React, { useState } from 'react'
import './AddCollection.css'
import '.'

function AddCollection(props) {

  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  // const [tag, setTag] = useState([])

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  // const handleChangeTag = (e) => {
  //   setTag(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: title,
      description: description
    }

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(() => {
      props.fetchAllCollections()
      return(
        props.history.push('/user-home')
      )
    })
  }

  return (
    <form className="form" action="/action_page.php" onSubmit={handleSubmit} method="post">
      <label className="label">
        Title: <input className="text-box" type="text" onChange={handleChangeTitle} />
      </label>
      <br/>
      <label className="label">
        Description: <input className="text-box" type="text" onChange={handleChangeDescription} />
      </label>
      <br/>
      <input className="button" type="submit" value="Submit" />
    </form>
  )
}

export default AddCollection