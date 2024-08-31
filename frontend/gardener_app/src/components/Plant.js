

function Plant({plant, gardenerid}) {

    function handleAddClick(e) {
        // console.log(gardenerid)
        // console.log(e.target.parentNode)
        let plantid = e.target.parentNode.id
        // console.log(plantid)
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
            <button onClick={handleClick}>remove</button>
            <button onClick={handleAddClick}>add</button>
           <h3>{plant.name} </h3>
           <img id="plant_image" src={plant.image} alt="plant"></img>
           <h4> Description: {plant.description}</h4>
           <h4> Instructions: {plant.instructions}</h4>
        </div>

    )
}

export default Plant