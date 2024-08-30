

function Plant({plant, gardener}) {
    // console.log(gardener.id)
    // console.log(gardener.id)
    console.log(plant)

    function handleAddClick(e) {
        // console.log(gardener)
        console.log(e.target.parentNode)
        let plantid = e.target.parentNode.id
        console.log(plantid)
        // fetch(`http://localhost:9494/plants/${plantid}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ gardener_id: 'new-value' })


        // })
    }
    
    
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
        <div class="plant" id={plant.id}>
            <button onClick={handleClick}>remove</button>
            <button onClick={handleAddClick}>add</button>
           <h3>{plant.name} </h3>
           <img id="plant_image" src={plant.image} alt="plant"></img>
           <h4> Description: {plant.description}</h4>
           {/* <h4>{plant.plant.description}</h4> */}
           <h4> Instructions: {plant.instructions}</h4>
           {/* <img id="plant_image" src={plant.plant.image} alt="plant"></img> */}
       

        </div>

    )
}

export default Plant