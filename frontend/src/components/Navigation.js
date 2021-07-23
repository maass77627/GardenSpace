import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Navigation = () => {

    let backendTest = () => {
        fetch("http://localhost:9292/test/")
        .then((res) => res.json())
        .then((data) => console.log(data.message)); 
    }
    
    let consoleTest = () => {
        console.log("Hello")
    }
    return (
        <Router>
            <div>
                <nav id="nav">
                <ul>
                    <li class="nav-li">
                    <Link to="/">Home</Link>
                    </li>
                    <li class="nav-li">
                    <Link to="/brands">Brands</Link>
                    </li>
                    <li class="nav-li">
                    <Link to="/bikes">Bikes</Link>
                    </li>
                </ul>
                </nav>
                
                <Switch>
                <Route path="/bikes">
                    { backendTest() }
                </Route>
                <Route path="/brands">
                    { consoleTest()}
                </Route>
                <Route path="/">
                    Home
                </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navigation