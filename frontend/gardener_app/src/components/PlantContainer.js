import Plant from "./Plant"
import PlantForm from "./PlantForm"
import { useState } from "react"

function PlantContainer({plants, gardener, gardenerid}) {
    
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }
    
    console.log(plants)
    return (
        <div id="plantcontainer">
            <h2 id="h1">Plants</h2>
            <p id="sent">click image for options</p>
            <button onClick={handleClick}>Add Plant</button>
            {plants.map((plant) => <Plant gardenerid={gardenerid} gardener={gardener} key={plant.id} plant={plant}></Plant>)}
            {toggle ? <PlantForm/> : null}
        </div>
    )
}

export default PlantContainer;

