import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Profile from "./profile";
import Users from "./users";
import About from "./about";
import House from "./house";
import Home from "./home";

import "./style.css";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const menu = () => {
    return(
    <>
<Router>

<div>
    <nav className="navigation">
        <ul>
<li>
    <Link to="/home"></Link>
</li>

<li>
    <Link to="/profile"><FontAwesomeIcon icon = {faAddressCard}/>Profile</Link>
</li>

<li>
    <Link to="/about"><FontAwesomeIcon icon = {faFile}/>About</Link>
</li>

<li>
    <Link to="/users"> <FontAwesomeIcon icon = {faUser}/>Users</Link>
</li>
<li>
    <Link to="/house"> <FontAwesomeIcon icon = {faHome}/>Home</Link>
</li>


        </ul>
    </nav>
<Switch>
<Route path="/house">
        <House/>
    </Route>
    <Route path="/profile">
        <Profile/>
    </Route>
    
    <Route path="/about">
        <About/>
    </Route>

    <Route path="/users">
    <Users/>

    </Route>

    <Route path="/home">
        <Home/>
    </Route>
</Switch>
</div>
    

</Router>           
    
     </>
    )
    
}


    export default menu