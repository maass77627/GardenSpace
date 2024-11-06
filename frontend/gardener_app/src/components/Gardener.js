import { useState } from "react";

function Gardener({gardener, gardenerid}) {
  
   const [plants, setPlants] = useState()

   function handleDelete(e) {
    console.log(gardener)
    // console.log(plants)
     console.log(e.target.parentNode.childNodes[0].id)
      let plantid = e.target.parentNode.childNodes[0].id
    // console.log("deleting")
    //  let updatedPlants = plants.filter((plant) => plant.id !== plantid)
    // console.log(updatedPlants)
    //  setPlants(updatedPlants)
    // console.log(plants)
     fetch(`http://localhost:9494/gardenerplants/${gardener}/${plantid}`, {
         method: "DELETE",
         
      })
    //     .then((response) => response.json())
    //      .then((json) => {
    //     console.log(json)
    //     setPlants(json)
    //   })
   }
   

    function handleClick(e) {
        
        let name = e.target.parentNode.innerText
        let newname = name.split("'")[0].slice(1)
       
    
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
            {plants ? plants.map((plant) => <div id="gg"><span className="planttitle" id={plant.id}>{plant.name}</span><br></br> <img  key={plant.id} id="gplant" src={plant.image} alt="plant"></img><br></br> <button onClick={handleDelete}>remove</button></div>) : null}
           
        </div>
    )
}

export default Gardener


