import React, { Component } from "react";
import { render } from "@testing-library/react";

class Bootstrapcss extends Component{
    render(){
        return(
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
        )
    }
}

export default Bootstrapcss;