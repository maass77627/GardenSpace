import PlantContainer from "./components/PlantContainer"
import GardenerContainer from "./components/GardenerContainer"
import { useEffect } from "react";
import { useState } from "react";
import './App.css';

function App() {
  console.log("app loaded")

const [gardeners, setGardeners] = useState([])
const [plants, setPlants] = useState([])

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


  





  return (
    <div className="App">
      <header className="App-header">
        <h1>Gardener</h1>
        <PlantContainer plants={plants}/>
        <GardenerContainer gardeners={gardeners}/>
      </header>
    </div>
  );
}

export default App;
