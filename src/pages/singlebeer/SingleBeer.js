import React, {useEffect,  useState } from 'react'
import { useParams} from 'react-router-dom'

const SingleBeer = () => {
  const [oneBeer, setOneBeer] = useState({})
  const [userIds, setUserIds] = useState([])
  const [userData, setUserData] = useState([])
  const params = useParams()
  console.log(params.id)

  useEffect(() => {
  fetch(`http://localhost:9292/beers/individual/${params.id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setOneBeer(data)
    setUserIds(data.ratings)
    setUserData(data.user_info)
  })
  }, [])
 
  const userRatings = userIds.map((rating) => {
    return <ul>{rating.rating_value} </ul>
  })

  const userInfo = userData.map(user => {
    return <ul>user.name</ul>
  })

  return (
    <div>
      <h1>{oneBeer.name}</h1>
      <div>
        {userInfo} {userRatings} </div>
    </div>
  )
}

export default SingleBeer