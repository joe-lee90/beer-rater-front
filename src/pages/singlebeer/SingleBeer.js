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
    //console.log(data)
    setOneBeer(data)
    // setUserIds(data.ratings)
    // setUserData(data.user_info)
    
    let newArray = []
    let beer = data.user_info.forEach((rating) => {
      //console.log(rating[0].name, rating[0].image, rating[1].rating_value)
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


  // const userStuff = (userId) => {
  //   //userData.filter(user => user.user_id === userId ? console.log(user) : null)
  //   console.log(userId)
  //   const newArray = userData.find(user => {
  //     if (user.id === userId){
  //       return user.name
  //     }
  //   })
  //   return newArray
  // }
 
  // const userRatings = userIds.map((rating) => {
  //   return <ul>{rating.rating_value} {userStuff(rating.user_id)} </ul>
  // })

  // const userInfo = userData.map(user => {
  //   return <ul>{user.name}</ul>
  // })

  return (
    <div>
      <h1>{oneBeer.name}</h1>
      <div>
        {ratingList}
      </div>
    </div>
  )
}

export default SingleBeer