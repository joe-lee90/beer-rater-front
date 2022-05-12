import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './EditBeer.css'

const EditBeer = () => {
    const [beerData, setBeerData] = useState({
      name: "",
      beer_type: "",
      location: "", 
      abv: 0,
      brewery_name:"",
      image: "",
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
    })
};
  const handleChange = (e) => {
    const { name,  value } = e.target
    setBeerData((beerData) => ({...beerData, [name]: value}))
  }
    
  return (
    <div>
    <section className="add-beer-form">
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <h2 className="add-beer-title">Edit Beer</h2>

      <label htmlFor="name" className="form-text">Name</label>
      <input
          className="beer-form"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={beerData.name}
      />

      <label htmlFor="beer_type" className="form-text">Beer Type</label>
      <select
          className="beer-form"
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
      
      <label htmlFor="location" className="form-text">Location</label>
      <input
          className="beer-form"
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          value={beerData.location}
      />

      <label htmlFor="brewery_name" className="form-text">Brewery</label>
      <input
          className="beer-form"
          type="text"
          id="brewery_name"
          name="brewery_name"
          onChange={handleChange}
          value={beerData.brewery_name}
      />

      <label htmlFor="abv" className="form-text">ABV</label>
      <input
          className="beer-form"
          type="number"
          step="0.1"
          id="abv"
          name="abv"
          onChange={handleChange}
          value={beerData.abv}
      />

      <label htmlFor="image">Image</label>
      <input
          className="beer-form"
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={beerData.image}
      />

      <button className="submit-button" type="submit" >Save Beer</button>
</form>
</section>
</div>
  )
}

export default EditBeer