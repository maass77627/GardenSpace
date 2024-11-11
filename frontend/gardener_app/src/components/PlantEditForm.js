// import Plant from "./Plant"
import React from "react";
import { useState } from "react";

 function PlantEditForm({plant}) {

     const [formData, setFormData] = useState({
         name: plant.name,
         description: plant.description,
         instructions: plant.instructions,
         image: plant.image,
         gardener_id: 3,
     })


 function handleNameChange(e) {
     console.log(e)
     setFormData({
        ...formData,
        name: e.target.value
     })
 }

 function handleDescriptionChange(e) {
    setFormData({
        ...formData, 
        description: e.target.value
    })
    
 }

 function handleInstructionsChange(e) {
    console.log(e)
    setFormData({
        ...formData, 
        instructions: e.target.value
    })
 }

 function handleImageChange(e) {
    console.log(e)
    setFormData({
        ...formData, 
        image: e.target.value
    })
 }

 function handleGardenerChange(e) {
    console.log(e)
    setFormData({
        ...formData, 
        gardener_id: e.target.value
    })
 }



 function handleSubmit(e) {
    console.log(e.target)
     e.preventDefault()
     fetch("http://localhost:9494/plants", {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({formData})
     })
 .then((response) => response.json())
 .then((json) => console.log(json))
 }

    return (
        <div id="formdiv">

            <form className="editplantform" id={plant.id} onSubmit={handleSubmit}>
                <label>Name:</label>
                <input onChange={handleNameChange} value={formData.name}></input><br></br>
                <label>Description:</label>
                <input onChange={handleDescriptionChange} value={formData.description}></input>
                <label>Instructions:</label>
                <input onChange={handleInstructionsChange} value={formData.instructions}></input><br></br>
                <label>Image:</label>
                <input onChange={handleImageChange} value={formData.image}></input><br></br>
                <label>gardener_id:</label>
                <input onChange={handleGardenerChange} value={formData.gardener_id}></input><br></br>
                <button>submit</button>
            </form>
        </div>
    )
}

export default PlantEditForm