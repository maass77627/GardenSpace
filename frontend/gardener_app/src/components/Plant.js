

function Plant(plant) {
    console.log(plant)
    return (
        <div id="plant">
            <button>remove</button>
           <h3>{plant.plant.name} </h3>
           <img id="plant_image" src={plant.plant.image} alt="plant"></img>
           <h4> Description: </h4>
           <h4>{plant.plant.description}</h4>
           <h4> Instructions: {plant.plant.instructions}</h4>
           {/* <img id="plant_image" src={plant.plant.image} alt="plant"></img> */}
       

        </div>

    )
}

export default Plant