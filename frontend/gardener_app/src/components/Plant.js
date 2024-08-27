

function Plant(plant) {
    console.log(plant)
    return (
        <div id="plant">
            
           <h3>Name: {plant.plant.name} </h3>
           <img id="plant_image" src={plant.plant.image} alt="plant"></img>
           <h4> Description: {plant.plant.description}</h4>
           <h4> Instructions: {plant.plant.instructions}</h4>
           {/* <img id="plant_image" src={plant.plant.image} alt="plant"></img> */}
       

        </div>

    )
}

export default Plant