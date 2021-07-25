import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BikeGallery from './BikeGallery';
import BrandGallery from './BrandGallery';



const Navigation = () => {
    let consoleTest = () => {
        console.log("Hello")
    }
    return (
        <Router>
                <nav id="nav">
                <ul>
                    <li className="nav-li">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="nav-li">
                    <Link to="/brands">Brands</Link>
                    </li>
                    <li className="nav-li">
                    <Link to="/bikes">Bikes</Link>
                    </li>
                </ul>
                </nav>
                
                <Switch>
                <Route path="/bikes">
                    <BikeGallery />
                </Route>
                <Route path="/brands">
                    <BrandGallery/>
                </Route>
                <Route path="/">
                    Home
                </Route>
                </Switch>
        </Router>
    )
}

export default Navigation