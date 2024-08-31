import { useState } from "react";

function Gardener({gardener, gardenerid}) {
    // console.log(gardener.gardener)
    // console.log(gardenerid)
   const [plants, setPlants] = useState()
    // const [toggle, setToggle] = useState(false)

    function handleClick(e) {
        // console.log(e.target.parentNode.innerText)
        let name = e.target.parentNode.innerText
        let newname = name.split("'")[0].slice(1)
        // console.log(newname)
    
     fetch(`http://localhost:9494/gardenerplants/${newname}`)
        .then((response) => response.json())
         .then((json) => {
        console.log(json)
        setPlants(json)
      })
 }

    return (
        <div id={gardenerid} className="garden">
            <h1>"{gardener}'s Garden"</h1>
            <button id={gardenerid} onClick={(e) => handleClick(e)}>Show Plants</button>
            {plants ? plants.map((plant) => <h1 key={plant.id}>{plant.name}</h1>) : null}
            {plants ? plants.map((plant) => <img  key={plant.id} id="gplant" src={plant.image} alt="plant"></img>) : null}<br></br>
            <button>remove</button>
        </div>
    )
}

export default Gardener
//gardener.gardener.id

