import React, { Component, Fragment } from "react";

class Contacts extends Component{
    render(){
        return(
            <Fragment>
                <div style={{padding: "30px"}}>
                    <h1>Kontak Saya</h1>
                    <br/>
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <td>WhatsApp / Telegram</td>
                                <td>0812-8370-8972</td>
                            </tr>
                            <tr>
                                <td>E-Mail</td>
                                <td>amirullohw@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Facebook</td>
                                <td>Wahyu Amirulloh</td>
                            </tr>
                            <tr>
                                <td>Instagram</td>
                                <td>@wahyuamirulloh</td>
                            </tr>
                            <tr>
                                <td>GitHub</td>
                                <td>github.com/wahyuamirulloh</td>
                            </tr>
                            <tr>
                                <td>Linkedln</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                        </table>
                    <br/><br/><br/><br/><br/>
                </div>
            </Fragment>
        )
    }
}

export default Contacts;