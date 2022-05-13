import './SignUp.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [user, setUser] = useState([])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      addUser({
        name,
        image
      })
    };
  
    const addUser = (formData) => {
        fetch(`http://localhost:9292/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(res => res.json())
          .then(newUser => {
            setUser(user.concat(newUser))
            navigate('/')
          });
      }

    return (
      <>
        <h1 className='add-beer-title' >New User</h1>
        <form
          onSubmit={handleSubmit} >
          <fieldset className="sign-up-form">
            <label className="form-text" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className=""
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </fieldset>
          <fieldset className="sign-up-form">
            <label className="form-text" htmlFor="image">
              Image
            </label>
            <input
              type="text"
              className=""
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}/>
          </fieldset>
          <button
            className="submit-button"
            type="submit" >
            Add User
          </button>
        </form>
      </>
    );
  }
  