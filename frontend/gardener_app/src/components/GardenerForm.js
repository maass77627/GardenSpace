
import { useState } from "react"


function GardenerForm() {

    const [formData, setFormData] = useState({
        name: "ben"
    })

    function handleChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            name: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`http://localhost:9494/gardeners`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
              }).then((response) => response.json())
              .then((json) => console.log(json))

    }

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(formData)
    //     fetch("http://localhost:9494/gardeners", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         }, 
    //         body: JSON.stringify(formData)

    //     // .then((response) => response.json())
    //     // .then((json) => {console.log(json)})
        
    //        })
        

    // }
    
    return(
        <div id="gform">
            <form id="addgard" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" value={formData.name}></input>
                <button>submit</button>
            </form>

        </div>

    ) 

}

export default GardenerForm