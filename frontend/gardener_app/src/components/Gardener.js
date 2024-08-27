import { useState } from "react";

function Gardener(gardener, id) {
    console.log(gardener)
   const [plants, setPlants] = useState()
    // const [toggle, setToggle] = useState(false)

    function handleClick(e) {
        console.log(e.target.id)
         let id = e.target.id
        fetch(`http://localhost:9494/gardenerplants/${id}`)
         .then((response) => response.json())
         .then((json) => {
        console.log(json)
        setPlants(json)
      })
 }

    return (
        <div id="garden">
            <h1>"{gardener.gardener}'s Garden"</h1>
            <button id={gardener.gardener.id} onClick={(e) => handleClick(e)}>Show Plants</button>
            {plants ? plants.map((plant) => <h1>{plant.name}</h1>) : null}
            {plants ? plants.map((plant) => <img src={plant.image} alt="plant"></img>) : null}
        </div>
    )
}

export default Gardener

//  {/* <h1>Gardener: {gardener.gardener.name}</h1>
            // <h4> {gardener.gardener.id}</h4> */}