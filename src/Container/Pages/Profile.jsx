//Initialize
import React, { Component, Fragment } from "react";

//Pages
import MainProfile from "../../Component/MainProfile";
import InformationPage from "../../Component/InformationPage"

class Profile extends Component{
    render(){
        return(
            <Fragment>
                <MainProfile/>
                <InformationPage/>
            </Fragment>
        )
    }
}

export default Profile;