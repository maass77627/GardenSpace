import Gardener from "./Gardener"
import { useState } from "react"

function GardenerContainer({gardeners}) {
// console.log("garden container loaded")
    const [gardener, setGardener] = useState()

    function handleChange(e) {
        console.log(e.target.value)
        setGardener(e.target.value)
    }

    console.log(gardeners)
    return (
        <div id="gardencontainer">
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