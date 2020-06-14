import React, { Component, Fragment } from "react";

class Experience extends Component{
    render(){
        return(
            <Fragment>
                <div style={{padding: "30px"}}>
                    <h1>Pengalaman</h1>
                    <br/>
                    <ul class="list-group">
                        <li class="list-group-item"><p>2019</p><li class="list-group-item"><p style={{color: "black"}}>Peserta OSK Ilmu Pengetahuan Alam Kab. Bogor</p></li><li class="list-group-item"><p style={{color: "black"}}>Peserta Japanese Language Proficiency Test N5 2019</p></li></li>
                        <li class="list-group-item"><p>2018 - Sekarang</p><li class="list-group-item"><p style={{color: "black"}}>Bersekolah di SMP CIKAL CENDEKIA</p></li></li>
                        <li class="list-group-item"><p>2014 - 2018</p><li class="list-group-item"><p style={{color: "black"}}>Bersekolah di SDN MAMPIR 84</p></li></li>
                        <li class="list-group-item"><p>2012 - 2014</p><li class="list-group-item"><p style={{color: "black"}}>Bersekolah di SDN NAGRAK 06</p></li></li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Experience;