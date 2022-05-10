import React, {useEffect, useState} from 'react'
import BeerCard from '../../components/BeerCard'
import HomeBar from '../../components/HomeBar'
import AddABeer from '../../components/AddABeer'
import './HomeContainer.css'


const HomeContainer = () => {
  const [beers, setBeers] = useState([])
  const [users, setUsers] = useState([])

    useEffect(() => {
      fetch('http://localhost:9292/beers')
      .then(res => res.json())
      .then(data => setBeers(data))
    }, [])

    const displayBeers = beers.map(beer => {
      return <BeerCard beer={beer} key={beer.id} />
    })

    useEffect(() => {
      fetch('http://localhost:9292/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])
    
    const displayUsers = users.map(user => {
      return <BeerCard user={user} key={user.id} />
    })

    const onAddABeer = (newBeer) => {
        setBeers((beers) => [...beers, newBeer]) 
      }
        
  return (
    <div className='home-container'>
      <HomeBar users={users}/>
      {/* <AddABeer onAddABeer={onAddABeer}/> */}
      {displayBeers} 
    </div>
  )
}

export default HomeContainer