import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './HomeBar.css'

export default function HomeBar({ users }) {
  const [currentBeerType, setCurrentBeerType] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');

  const handleBeerChange = (event: SelectChangeEvent) => {
    setCurrentBeerType(event.target.value);
  };

  const handleUserChange = (event: SelectChangeEvent) => {
    setCurrentUser(event.target.value);
  };

  let userList = users.map(user => {
    return <MenuItem value={`${user.name}`}> {user.name}</MenuItem>;  
  });

  return (
    <div>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Beer Type</InputLabel>
        <Select
          id="beer-type-select"
          value={currentBeerType}
          label="Beer Type"
          onChange={handleBeerChange}>
          <MenuItem value={'Pilsner'}>Pilsner</MenuItem>
          <MenuItem value={'Dark Lager'}>Dark Lager</MenuItem>
          <MenuItem value={'German Bock'}>German Bock</MenuItem>
          <MenuItem value={'Brown Ale'}>Brown Ale</MenuItem>
          <MenuItem value={'Pale Ale'}>Pale Ale</MenuItem>
          <MenuItem value={'India Pale Ale'}>India Pale Ale</MenuItem>
          <MenuItem value={'Porter'}>Porter</MenuItem>
          <MenuItem value={'Stout'}>Stout</MenuItem>
          <MenuItem value={'Belgian-Style Ale'}>Belgian-Style Ale</MenuItem>
          <MenuItem value={'Wheat Beer'}>Wheat Beer</MenuItem>
          <MenuItem value={'Wild & Sour Ale'}>Wild - Sour Ale</MenuItem>
          <MenuItem value={'Specialty Beer'}>Specialty Beer</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
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
    </div>
  );
};