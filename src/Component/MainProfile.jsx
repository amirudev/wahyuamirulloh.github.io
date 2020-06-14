import React, { Component, Fragment } from "react";
import Bootstrapcss from "../Framework/Bootstrap/Bootstrapcss";
import Bootstrapjs from "../Framework/Bootstrap/Bootstrapjs";
import Profileimg from "../Icon/profileimg.jpeg";

class MainProfile extends Component{
    render(){
        return(
            <Fragment>
                <Bootstrapcss/>
                <Bootstrapjs/>
                <div style={{height: "100%"}}>
                    <div style={{
                        padding: "10px",
                        width: "34%",
                        background: "#cccccc",
                        float: "left",
                        position: "fixed",
                        display: "block",
                        paddingTop: "75px"
                    }}>
                        <div>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <div>
                                <div className="d-flex justify-content-center">
                                <img src={Profileimg} style={{width: "20%"}} className="rounded-circle"/>
                                </div>
                                <br/>
                                <p className="d-flex justify-content-center">Wahyu Amirulloh</p>
                                <p className="d-flex justify-content-center">Front End Web Developer</p>
                                <br/><br/><br/><br/>
                            </div>
                            <br/><br/><br/><br/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainProfile;