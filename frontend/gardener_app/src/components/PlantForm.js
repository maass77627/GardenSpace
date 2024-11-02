import { useState } from 'react'


function PlantForm() {

    const [formData, setFormData] = useState({
        name: "jill",
        description: "nice",
        instructions: "water",
        image: "rose.jpg",
       gardener_id: 3,
    })
//
    function handleNameChange(e) {
        
        setFormData({
            ...formData, 
            name: e.target.value
        })
    }

    function handleDesChange(e) {
        
        setFormData({
            ...formData, 
            description: e.target.value
        })

    }

    function handleInstructionsChange(e) {
       
        setFormData({
            ...formData, 
            instructions: e.target.value
        })

    }

    function handleIdChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            gardener_id: e.target.value
        })
    }

   

    function handleImageChange(e) {
        
        setFormData({
            ...formData, 
            image: e.target.value
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
       
        fetch("http://localhost:9494/plants", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
              })

    }

    return (
        <div id="newplant">
            <form onSubmit={handleSubmit} id="form">
                <label>name</label>
                <input onChange={handleNameChange} type="text" name="name" value={formData.name}></input><br></br>
                <label>description</label>
                <input onChange={handleDesChange} type="text" name="description" value={formData.description}></input><br></br>
                <label>instructions</label>
                <input onChange={handleInstructionsChange} type="text" name="instructions" value={formData.instructions}></input><br></br>
                <label>image</label>
                <input onChange={handleImageChange} type="text" name="image" value={formData.image}></input><br></br>
                <label>gardener_id</label>
                <input onChange={handleIdChange} type="text" name="gardener_id" value={formData.gardener_id}></input><br></br>
                <button>submit</button>
            </form>
        </div>
    )

}

export default PlantForm