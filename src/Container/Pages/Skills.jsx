import React, { Component, Fragment } from "react";

class Skills extends Component{
    render(){
        return(
            <Fragment>
                <div style={{padding: "30px"}}>
                    <h1>Skill Saya</h1>
                    <br/>
                    <p>HTML</p>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>CSS</p>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>Javascript</p>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>Node JS</p>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>React JS</p>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>C ( Arduino ) & C# ( Unity )</p>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: "30%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <br/>
                    <h3>Skill Lain</h3>
                    <p><br/>English ( Bahasa Inggris )</p>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>日本語 ( Bahasa Jepang )</p>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>한국어 ( Bahasa Korea )</p>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p><br/>Microsoft Office</p>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{width: "55%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Skills;