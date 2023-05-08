import React from "react";
import Button from "./button";

export default function Feedback(props) {

    return (
        <div className="feedback-container">
            <div className="first-child">
                <form onSubmit={props.clicked}>
                    <div>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>
                    <input placeholder="Email"></input>
                    <input placeholder="Item name"></input>
                    <input onChange={props.change} value={props.value} placeholder="Feedback"></input>
                    <Button kind="SUBMIT"/>
                </form>
            </div>
            <div className="second-child">
                <div className="output">
                    <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/312624354_1561560460960412_6438238438115084863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeENXAuP1HTq2irx-cv4Kq0k5QAH5EK0OsflAAfkQrQ6x_kg61BOpMfm99RWbDjY6W06GdwDyTH8MnomFVFZeMSa&_nc_ohc=MWeg83WWan0AX-t84VA&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfCKEn5vu6pKUh8sjWOrWlhpDxqoMNKocRIX8PcSTkqk1w&oe=6455DFD1"></img>
                    <h1>{props.data}</h1>
                    <img src="ice-cream.png"></img>
                </div>
            </div>
        </div>
    )
}