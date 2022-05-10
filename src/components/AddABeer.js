import React,{useState} from 'react'
import './AddABeer.css'

function AddABeer({ onAddABeer }) {
const [formData, setformData] = useState({
    name: "",
    beer_type: "",
    location: "", 
    abv: 0,
    brewery_name:""
})

const handleChange = (e) => {
    const { name,  value} = e.target
    setformData((formData) => ({...formData, [name]: value}))
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
        onAddABeer(data);
        setformData({
          name: "",
          beer_type: "",
          location: "", 
          abv: 0,
          brewery_name:""
        });
    });
};

return (
<section>
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h2>Add Your Own Beer</h2>

        <label htmlFor="name">Name</label>
        <input
            className="beer_form"
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
        />

        <label htmlFor="beer_type">Beer Type</label>
        <select
            className="beer_form"
            name="beer_type"
            id="beer_type"
            onChange={handleChange}
            value={formData.beer_type}
        >
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
        </select>
        
        <label htmlFor="location">Location</label>
        <input
            className="beer_form"
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
            value={formData.location}
        />

        <label htmlFor="brewery_name">Brewery</label>
        <input
            className="beer_form"
            type="text"
            id="brewery_name"
            name="brewery_name"
            onChange={handleChange}
            value={formData.brewery_name}
        />
 
        <label htmlFor="abv">ABV</label>
        <input
            className="beer_form"
            type="number"
            step="0.1"
            id="abv"
            name="abv"
            onChange={handleChange}
            value={formData.abv}
        />

        {/* <label htmlFor="beer_image">Image</label>
        <input
            className="beer_form"
            type="text"
            id="beer_image"
            name="beer_image"
            onChange={handleChange}
            value={formData.beer_image}
        /> */}

        <button className="search" type="submit" >Add Beer</button>
    </form>
</section>
)
}

export default AddABeer