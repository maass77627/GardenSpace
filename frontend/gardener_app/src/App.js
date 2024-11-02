import PlantContainer from "./components/PlantContainer"
import GardenerContainer from "./components/GardenerContainer"
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  

  const [gardeners, setGardeners] = useState([])
  const [plants, setPlants] = useState([])
  const [current, setCurrent] = useState()
  const [currentId, setCurrentId] = useState()

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
      setCurrent(e.target.value)
      setCurrentId(e.target.selectedOptions[0].id)
    }


  
 return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src="newsestgardenlogo.jpg" alt="plant"></img>
        <select key="select" onChange={handleChange}>
            {gardeners.map((gardener) => <option key={gardener.id} id={gardener.id} value={gardener.name} >{gardener.name}</option>)}
        </select>
        <PlantContainer  plants={plants} gardenerid={currentId} gardener={current}/>
        <GardenerContainer gardeners={gardeners} gardener={current} gardenerid={currentId}/>
       
      </header>
        <BrowserRouter>
         <Routes>
          <Route path="/garden" element={<GardenerContainer></GardenerContainer>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
