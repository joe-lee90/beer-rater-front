import React,{useState} from 'react'
import './AddABeer.css'
import { useNavigate } from 'react-router-dom'

function AddABeer() {
let navigate = useNavigate()
const [aBeer, setABeer] = useState([])
const [formData, setformData] = useState({
    name: "",
    beer_type: "",
    location: "", 
    abv: 0,
    brewery_name:"",
    image: "",
})

const handleChange = (e) => {
    const { name,  value} = e.target
    setformData((formData) => ({...formData, [name]: value}))
}

const onAddABeer = (newBeer) => {
    setABeer((aBeer) => [...aBeer, newBeer]) 
  }


const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData)
   };


 fetch("http://localhost:9292/beers", configObj)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        navigate('/')
    })
};

return (
    <div>
    <section className="add-beer-form">
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className='add-beer-title'>Add Your Own Beer</h2>

        <label htmlFor="name" className="form-text">Name</label>
        <input
            className="beer-form"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
        />

        <label htmlFor="beer_type" className="form-text">Beer Type</label>
        <select
            className="beer-form"
            name="beer_type"
            id="beer_type"
            onChange={handleChange}
            value={formData.beer_type}
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
            value={formData.location}
        />

        <label htmlFor="brewery_name" className="form-text">Brewery</label>
        <input
            className="beer-form"
            type="text"
            id="brewery_name"
            name="brewery_name"
            onChange={handleChange}
            value={formData.brewery_name}
        />
 
        <label htmlFor="abv" className="form-text">ABV</label>
        <input
            className="beer-form"
            type="number"
            step="0.1"
            id="abv"
            name="abv"
            onChange={handleChange}
            value={formData.abv}
        />

        <label htmlFor="image" className="form-text">Image</label>
        <input
            className="beer-form"
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            value={formData.image}
        />

        <button className="submit-button" type="submit" >Add Beer</button>
    </form>
</section>
</div>
)
}

export default AddABeer