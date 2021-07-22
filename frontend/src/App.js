import './App.css';

function App() {

  let backendTest = () => {
    fetch("http://localhost:9292/test")
      .then((res) => res.json())
      .then((data) => console.log(data)); 
  }

  let consoleTest = () => {
    console.log("Hello")
  }

  return (
    <div className="App">
      <header className="App-header" >
        { consoleTest() }
        { backendTest() }
      </header>
    </div>
  );
}

export default App;
