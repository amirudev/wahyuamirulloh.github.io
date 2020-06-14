//Initialize
import React, { Component, Fragment } from "react";
import {BrowserRoute, Route, Link} from "react-router-dom";

//Pages
import Profile from "../Profile";

class Home extends Component{
    render(){
        return(
            <Profile/>
        )
    }
}

export default Home;