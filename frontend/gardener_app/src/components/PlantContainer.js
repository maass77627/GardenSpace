import Plant from "./Plant"
import PlantForm from "./PlantForm"
import { useState } from "react"
import React from "react"

function PlantContainer({plants, gardener, gardenerid, deletePlant, addPlant}) {
    
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }
    
    
    return (
        <div id="plantcontainer">
            <h2 id="h1">Plants</h2>
            <button  onClick={handleClick}>Add Plant</button>
            <p id="sent">click image for options</p>
           
            {plants.map((plant) => <Plant addPlant={addPlant} deletePlant={deletePlant} gardenerid={gardenerid} gardener={gardener} key={plant.id} plant={plant}></Plant>)}
            {toggle ? <PlantForm addPlant={addPlant}/> : null}
        </div>
    )
}

export default PlantContainer;

