import { useState } from "react";
import PlantEditForm from "./PlantEditForm";

function Plant({plant, gardenerid}) {

    const [toggle, setToggle] = useState(false)
    const [deleteToggle, setDeleteToggle] = useState(false)


    function handleDeletePlant() {
        setDeleteToggle(!deleteToggle)
    }


    function handleEditClick(e) {
        console.log(e)
        setToggle(!toggle)

    }

    function handleAddClick(e) {
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
       let id = e.target.parentNode.id
        fetch(`http://localhost:9494/plants/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })

    }

   
    return (
        <div className="plant" id={plant.id}>
           
           <span id="span1">{plant.name} </span>
           <span onClick={handleAddClick} id="span4">&#9829;</span>
           <img  onClick={handleDeletePlant} id="plant_image" src={plant.image} alt="plant"></img>
           <span id="span2"> Description: {plant.description}</span>
           <span id="span3"> Instructions: {plant.instructions}</span>
           { deleteToggle ? <><button onClick={handleClick}>remove</button> <button onClick={handleEditClick}>edit</button></> : null }

           {toggle ? <PlantEditForm plant={plant}></PlantEditForm> : null}
        </div>

    )
}

export default Plant