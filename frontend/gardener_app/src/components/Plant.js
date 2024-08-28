

function Plant(plant) {
    
    function handleClick(e) {
        console.log("click")
        console.log(e.target.parentNode.id)
       let id = e.target.parentNode.id
        fetch(`http://localhost:9494/plants/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })

    }

    console.log(plant)
    return (
        <div class="plant" id={plant.plant.id}>
            <button onClick={handleClick}>remove</button>
           <h3>{plant.plant.name} </h3>
           <img id="plant_image" src={plant.plant.image} alt="plant"></img>
           <h4> Description: {plant.plant.description}</h4>
           {/* <h4>{plant.plant.description}</h4> */}
           <h4> Instructions: {plant.plant.instructions}</h4>
           {/* <img id="plant_image" src={plant.plant.image} alt="plant"></img> */}
       

        </div>

    )
}

export default Plant