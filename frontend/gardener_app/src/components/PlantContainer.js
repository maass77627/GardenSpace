import Plant from "./Plant"
import PlantForm from "./PlantForm"

function PlantContainer({plants}) {
    
    console.log(plants)
    return (
        <div id="plantcontainer">
            <h2 id="h1">Plants</h2>
            <button>Add Plant</button>
            {plants.map((plant) => <Plant key={plant.id} plant={plant}></Plant>)}
            <PlantForm/>
        </div>
    )
}

export default PlantContainer;

