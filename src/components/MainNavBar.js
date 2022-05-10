import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './MainNavBar.css';
import { Link, Navigate }  from 'react-router-dom'
import HomeContainer from '../pages/home/HomeContainer';
import {useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap';

export default function MainNavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  

  return (
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <LinkContainer to='/'>
        <Tab label="Home"/>
      </LinkContainer>
      <LinkContainer to='/add-a-beer'>
        <Tab label="Add a Beer"/>
      </LinkContainer>
      <LinkContainer to='/sign-up'>
        <Tab label="Sign Up"/>
      </LinkContainer>
    </Tabs>
  );
}
