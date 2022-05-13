import React, {useEffect, useState} from 'react'
import BeerCard from '../../components/BeerCard'
import HomeBar from '../../components/HomeBar'
import './HomeContainer.css'

const HomeContainer = () => {
  const [beers, setBeers] = useState([])
  const [users, setUsers] = useState([])
  const [currentBeerType, setCurrentBeerType] = React.useState('all');
  const [currentUser, setCurrentUser] = React.useState('');

  useEffect(() => {
    fetch('http://localhost:9292/beers')
    .then(res => res.json())
    .then(data => setBeers(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  function handleRemove(id){
    fetch(`http://localhost:9292/beers/${id}`, {
      method: 'DELETE'
    })
    const newBeers = beers.filter(beer => {
      if (beer.id !== id){
        return beer
      }
    })
    setBeers(newBeers)
  }

  let displayBeers
  if (currentBeerType === 'all'){
    displayBeers = beers.map(beer => {
      return <BeerCard beer={beer} key={beer.id} handleRemove={handleRemove} currentUser={currentUser}/>
    })
  }
  else{
    let filteredBeers = beers.filter(beer => {
      return beer.beer_type.toUpperCase() === currentBeerType.toUpperCase()
    })
    displayBeers = filteredBeers.map(beer => {
      return <BeerCard beer={beer} key={beer.id} handleRemove={handleRemove} currentUser={currentUser} />
    })
  }
  
  const onAddABeer = (newBeer) => {
      setBeers((beers) => [...beers, newBeer]) 
    }
      
  return (
    <div className="main-container">
      <div className='input-container'>
        <HomeBar className='inputs' users={users} 
                                    currentBeerType={currentBeerType} 
                                    setCurrentBeerType={setCurrentBeerType}
                                    currentUser={currentUser}
                                    setCurrentUser={setCurrentUser}/>
      </div>
      <div className='home-container'>
        {displayBeers} 
      </div>
    </div>
  )
}

export default HomeContainer