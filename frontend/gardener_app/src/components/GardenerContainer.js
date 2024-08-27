import Gardener from "./Gardener"
import { useState } from "react"

function GardenerContainer({gardeners}) {
// console.log("garden container loaded")
    const [gardener, setGardener] = useState()
    // const [id, setId] = useState()

    function handleChange(e) {
        console.log(e.target.value)
        setGardener(e.target.value)
        // setId(e.target.value.id)
    }

    console.log(gardeners)
    return (
        <div id="gardencontainer">
            <button id="gbtn">Add Gardener</button><br></br>
            <h2 id="h1">Gardeners</h2>
            
            <select onChange={handleChange} id="select">
            {gardeners.map((gardener) => <option value={gardener.name} >{gardener.name}</option>)}
           
            {/* {gardeners.map((gardener) => <Gardener key={gardener.id} gardener={gardener}></Gardener>)} */}
            </select>
            {gardener ? <Gardener key={gardener.id} gardener={gardener}></Gardener> : null}
            
        </div>
    )
}
export default GardenerContainer