import Plant from "./Plant"

function PlantContainer({plants}) {
    // console.log("plant container loaded")
    console.log(plants)
    return (
        <div id="plantcontainer">
            <h1>hello plant</h1>
            {plants.map((plant) => <Plant key={plant.id} plant={plant}></Plant>)}
        </div>
    )
}

export default PlantContainer;

