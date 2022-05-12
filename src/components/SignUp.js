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
        <h1 className="text-3xl mb-3">New User</h1>
        <form
          onSubmit={handleSubmit}
          className="text-2xl flex-col space-y-8 items-center"
        >
          <fieldset className="flex flex-grow mr-2 my-2">
            <label className="text-right w-28" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="flex-grow border-b-2 ml-4 outline-none"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-grow mr-2 my-2">
            <label className="text-right w-28" htmlFor="image">
              Image Url
            </label>
            <input
              type="text"
              className="flex-grow border-b-2 ml-4 outline-none"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </fieldset>
          <button
            className="block relative lg:-top-2 w-100 left-1 px-4 py-2 text-center bg-green-600 text-white"
            type="submit"
          >
            Add User
          </button>
        </form>
      </>
    );
  }
  