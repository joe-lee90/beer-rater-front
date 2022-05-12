import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useEffect, useState} from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './HomeBar.css'

export default function HomeBar({ users, currentBeerType, setCurrentBeerType, currentUser, setCurrentUser }) {

  const [selectedUser, setSelectedUser] = useState([])

  const handleBeerChange = (event) => {
    setCurrentBeerType(event.target.value);
  };

  const handleUserChange = (event) => {
    setCurrentUser(event.target.value);
  };

  let userList = users.map(user => {
    return <MenuItem key={user.id} id={user.id} value={`${user.id}`}>{user.name}</MenuItem>;  
  });

  useEffect(() => {
    fetch(`http://localhost:9292/users/${currentUser}`)
    .then(res => res.json())
    .then(data => setSelectedUser(data))
  }, [currentUser]);

  console.log(currentUser);

  return (
    <div className="home-bar">
    
    <Box className="home-box" sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Beer Type</InputLabel>
        <Select
          id="beer-type-select"
          value={currentBeerType}
          label="Beer Type"
          onChange={handleBeerChange}>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'pilsner'}>Pilsner</MenuItem>
          <MenuItem value={'dark-lager'}>Dark Lager</MenuItem>
          <MenuItem value={'german-bock'}>German Bock</MenuItem>
          <MenuItem value={'brown-ale'}>Brown Ale</MenuItem>
          <MenuItem value={'pale-ale'}>Pale Ale</MenuItem>
          <MenuItem value={'ipa'}>India Pale Ale</MenuItem>
          <MenuItem value={'porter'}>Porter</MenuItem>
          <MenuItem value={'stout'}>Stout</MenuItem>
          <MenuItem value={'belgian-style-ale'}>Belgian-Style Ale</MenuItem>
          <MenuItem value={'wheat-beer'}>Wheat Beer</MenuItem>
          <MenuItem value={'wild-sour'}>Wild - Sour Ale</MenuItem>
          <MenuItem value={'specialty'}>Specialty Beer</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>User</InputLabel>
        <Select
          id="user-select"
          value={currentUser}
          onChange={handleUserChange}>
          {userList}
        </Select>
      </FormControl>
      
    </Box>
    <Avatar className="avatar" src={selectedUser.image} alt={selectedUser.name} />
    </div>
  );
};