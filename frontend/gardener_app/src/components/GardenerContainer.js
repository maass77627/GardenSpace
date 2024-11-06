import Gardener from "./Gardener"
import { useState } from "react"
import GardenerForm from "./GardenerForm"

function GardenerContainer({gardeners, gardener, gardenerid}) {

    const [toggle, setToggle] = useState(false)


    function handleClick() {
        setToggle(!toggle)
    }

   
    return (
        <div id="gardencontainer">
            {toggle ? <GardenerForm key={gardener}></GardenerForm> : null}
            <button  onClick={handleClick} id="gbtn">Add Gardener</button><br></br>
            <h2 id="h1">Gardens</h2>
            {gardener ? <Gardener id={gardenerid} gardenerid={gardenerid} gardener={gardener}></Gardener> : null}
            
        </div>
    )
}
export default GardenerContainer