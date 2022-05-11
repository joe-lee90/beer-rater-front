import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './EditBeer.css'

const EditBeer = () => {
    const [beerData, setBeerData] = useState({
      name: "",
      beer_type: "",
      location: "", 
      abv: 0,
      brewery_name:""
  })
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9292/beers/individual/${params.id}`)
    .then(res => res.json())
    .then(data => setBeerData(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(beerData)
   };


 fetch(`http://localhost:9292/beers/${params.id}`, configObj)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        navigate('/')
        // onAddABeer(data);
        // setformData({
        //   name: "",
        //   beer_type: "",
        //   location: "", 
        //   abv: 0,
        //   brewery_name:""
        // });
    })
};
  const handleChange = (e) => {
    const { name,  value} = e.target
    setBeerData((beerData) => ({...beerData, [name]: value}))
  }
    
  return (
    <div>
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <h2>Edit Beer</h2>

      <label htmlFor="name">Name</label>
      <input
          className="beer_form"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={beerData.name}
      />

      <label htmlFor="beer_type">Beer Type</label>
      <select
          className="beer_form"
          name="beer_type"
          id="beer_type"
          onChange={handleChange}
          value={beerData.beer_type}
      >
          <option value=''>Select</option>
          <option value="pilsner">Pilsner</option>
          <option value="dark-lager">Dark Lager</option>
          <option value="german-bock">German Bock</option>
          <option value="brown-ale">Brown Ale</option>
          <option value="pale-ale">Pale Ale</option>
          <option value="ipa">India Pale Ale</option>
          <option value="porter">Porter</option>
          <option value="stout">Stout</option>
          <option value="belgian-style-ale">Belgian-Style Ale</option>
          <option value="wheat-beer">Wheat Beer</option>
          <option value="wild-sour">Wild and Sour Ale</option>
          <option value="specialty">Specialty</option>
      </select>
      
      <label htmlFor="location">Location</label>
      <input
          className="beer_form"
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          value={beerData.location}
      />

      <label htmlFor="brewery_name">Brewery</label>
      <input
          className="beer_form"
          type="text"
          id="brewery_name"
          name="brewery_name"
          onChange={handleChange}
          value={beerData.brewery_name}
      />

      <label htmlFor="abv">ABV</label>
      <input
          className="beer_form"
          type="number"
          step="0.1"
          id="abv"
          name="abv"
          onChange={handleChange}
          value={beerData.abv}
      />

      {/* <label htmlFor="beer_image">Image</label>
      <input
          className="beer_form"
          type="text"
          id="beer_image"
          name="beer_image"
          onChange={handleChange}
          value={beerData.beer_image}
      /> */}

      <button className="search" type="submit" >Save Beer</button>
</form>
</div>
  )
}

export default EditBeer