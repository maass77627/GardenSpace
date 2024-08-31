import PlantContainer from "./components/PlantContainer"
import GardenerContainer from "./components/GardenerContainer"
import { useEffect } from "react";
import { useState } from "react";
import './App.css';

function App() {
  console.log("app loaded")

const [gardeners, setGardeners] = useState([])
const [plants, setPlants] = useState([])
const [current, setCurrent] = useState()
// const [currentId, setCurrentId] = useState()

   useEffect(() => {
    fetch("http://localhost:9494/gardeners")
    .then((response) => response.json())
    .then((json) => {console.log(json)
      setGardeners(json)
      })
      console.log("gardeners useeffect loaded")
   }, []) 

  useEffect(() => {
    fetch("http://localhost:9494/plants")
    .then((response) => response.json())
    .then((json) => {console.log(json)
      setPlants(json)
      })
      console.log("plants useeffect loaded")
  }, []) 

  function handleChange(e) {
    console.log(e.target.id)
    // console.log(e.target.childNodes[0].id)

    setCurrent(e.target.value)
    // setCurrentId(e.target.value.id)
}


  





  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Gardener App</h1>
        <select key="select" onChange={handleChange}>
            {gardeners.map((gardener) => <option key={gardener.id} id={gardener.id} value={gardener.name} >{gardener.name}</option>)}
        </select>
        <PlantContainer  plants={plants} gardener={current}/>
        <GardenerContainer gardeners={gardeners} gardener={current}/>
       
      </header>
    </div>
  );
}

export default App;
