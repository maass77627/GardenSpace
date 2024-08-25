

function Plant(plant) {
    // console.log("plant loaded")
    console.log(plant)
    return (
        <div id="plant">
            
           <h3>Plant Name: {plant.plant.name} </h3>
           <h4> description: {plant.plant.description}</h4>
           <img id="plant_image" src={plant.plant.image} alt="plant"></img>
       

        </div>

    )
}

export default Plant