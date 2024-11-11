import React from "react";
import { useState } from "react";
import PlantEditForm from "./PlantEditForm";

function Plant({plant, gardenerid, deletePlant, addPlant}) {

    const [toggle, setToggle] = useState(false)
    const [deleteToggle, setDeleteToggle] = useState(false)


    function handleDeletePlant() {
        setDeleteToggle(!deleteToggle)
    }


    function handleEditClick(e) {
        console.log(e)
        setToggle(!toggle)

    }

    function handleAddClick(e, plant) {
        console.log(plant)
        console.log("clicked, clicked")
        let plantid = e.target.parentNode.id
       
        fetch(`http://localhost:9494/plants/${plantid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({gardener_id: gardenerid})
            }).then((response) => response.json())
            .then((json) => {console.log(json)
              console.log(json)
              })
        }
    
    
    function handleClick(e) {
        
        console.log(plant)
   
        fetch(`http://localhost:9494/plants/${plant.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
       deletePlant(plant.id)
            
        

    }

   
    return (
        <div className="plant" id={plant.id}>
           
           <span id="span1">{plant.name} </span>
           <span onClick={(plant) => handleAddClick(plant)} id="span4">&#9829;</span>
           <img  onClick={handleDeletePlant} id="plant_image" src={plant.image} alt="plant"></img>
           <span id="span2"> Description: {plant.description}</span>
           <span id="span3"> Instructions: {plant.instructions}</span>
           { deleteToggle ? <div ><button id="button" onClick={(plant) => handleClick(plant)}>remove</button> <button id="button2" onClick={handleEditClick}>edit</button></div> : null }

           {toggle ? <PlantEditForm  plant={plant}></PlantEditForm> : null}
        </div>

    )
}

export default Plant