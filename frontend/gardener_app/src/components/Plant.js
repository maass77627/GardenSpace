import { useState } from "react";
import PlantEditForm from "./PlantEditForm";

function Plant({plant, gardenerid}) {

    const [toggle, setToggle] = useState(false)
    const [deleteToggle, setDeleteToggle] = useState(false)


    function handleDeletePlant() {
        setDeleteToggle(!deleteToggle)
    }
// 
    // function handleRemovePlant(e) {
    //     console.log(e)
    // }

    function handleEditClick(e) {
        console.log(e)
        setToggle(!toggle)

    }

    function handleAddClick(e) {
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
            { deleteToggle ? <><button onClick={handleClick}>remove</button> <button onClick={handleAddClick}>add to garden</button><button onClick={handleEditClick}>edit</button></> : null }
           
           <h3>{plant.name} </h3>
           <img  onClick={handleDeletePlant} id="plant_image" src={plant.image} alt="plant"></img>
           <h4> Description: {plant.description}</h4>
           <h4> Instructions: {plant.instructions}</h4>
          

           {toggle ? <PlantEditForm plant={plant}></PlantEditForm> : null}
        </div>

    )
}

export default Plant