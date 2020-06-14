import React, {Component, Fragment} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Bootstrapcss from "../Framework/Bootstrap/Bootstrapcss";
import Bootstrapjs from "../Framework/Bootstrap/Bootstrapjs";

//pages
import About from "../Container/Pages/About";
import Projects from "../Container/Pages/Projects";
import Skills from "../Container/Pages/Skills";
import Experience from "../Container/Pages/Experience";
import Contacts from "../Container/Pages/Contacts";

class InformationPage extends Component{
    render(){
        return(
            <BrowserRouter>
            <Fragment>
                <Bootstrapcss/>
                <Bootstrapjs/>
                <div className="flex">
                    <div style={{
                        width: "66%",
                        float: "right",
                        background: "#f2f2f2",
                        display: "block"
                    }}>
                    
                    {/* Navigation Bar*/}
                    <div className="navbar navbar-expand-lg">
                        <Link to ="/" className="m-3">About</Link>
                        {/* <Link to ="/Projects" className="m-3">Projects</Link> */}
                        <Link to ="/Skills" className="m-3">Skills</Link>
                        <Link to ="/Experience" className="m-3">Experience</Link>
                        <Link to ="/Contacts" className="m-3">Contacts</Link>
                    </div>

                    {/* Routing Component*/}
                    <Route path="/" exact component={About}/>
                    <Route path="/Projects" component={Projects}/>
                    <Route path="/Skills" component={Skills}/>
                    <Route path="/Experience" component={Experience}/>
                    <Route path="/Contacts" component={Contacts}/>
                    </div>
                </div>
            </Fragment>
            </BrowserRouter>
        )
    }
}

export default InformationPage;