import Gardener from "./Gardener"
import { useState } from "react"
import GardenerForm from "./GardenerForm"

function GardenerContainer({gardeners, gardener}) {
    console.log(gardener)
    console.log(gardeners)
    // const [gardener, setGardener] = useState()
    const [toggle, setToggle] = useState(false)

    // function handleChange(e) {
    //     console.log(e.target.value)
    //     setGardener(e.target.value)
    // }

    function handleClick() {
        setToggle(!toggle)
    }

    console.log(gardeners)
    return (
        <div id="gardencontainer">
            <button  onClick={handleClick} id="gbtn">Add Gardener</button><br></br>
            <h2 id="h1">Gardeners</h2>
            
            {/* <select onChange={handleChange} id="select">
            {gardeners.map((gardener) => <option id={gardener.id} value={gardener.name} >{gardener.name}</option>)}
            </select> */}

            {gardener ? <Gardener id={gardener.id} gardener={gardener}></Gardener> : null}
            {toggle ? <GardenerForm key={gardener}></GardenerForm> : null}
            
        </div>
    )
}
export default GardenerContainer