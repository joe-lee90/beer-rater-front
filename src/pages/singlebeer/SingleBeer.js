import React, {useEffect,  useState } from 'react'
import { useParams} from 'react-router-dom'
import './SingleBeer.css'
import Rating from '@mui/material/Rating'

const SingleBeer = () => {
  const [oneBeer, setOneBeer] = useState({})
  const [userData, setUserData] = useState([])
  const params = useParams()

  useEffect(() => {
  fetch(`http://localhost:9292/beers/individual/${params.id}`)
  .then(res => res.json())
  .then(data => {
    setOneBeer(data)

    let newArray = []
    let beer = data.user_info.forEach((rating) => {
      newArray.push({name: rating[0].name, image: rating[0].image, rating_value: rating[1].rating_value})
    })
  setUserData(newArray)
  })
  }, [])

  const ratingList = userData.map(rating => {
    return (
      <div key={rating.name} className='rating-list'>
        <img src={rating.image} alt={rating.name}></img>
        <p>{rating.name} <br/>
        <Rating name="half-rating" className='avg-rating' defaultValue={rating.rating_value} precision={0.5} readOnly/></p>
      </div>
      )
  })

  return (
    <div>
    <div className="single-beer-image" >
      <h1>{oneBeer.name}</h1>
      <img className='one-beer-image' src={oneBeer.image} alt={oneBeer.name} />
      </div>
      <div>
      <h1 className='rating-list'>
      Ratings
      </h1>
        {ratingList}
      </div>
    </div>
  )
}

export default SingleBeer