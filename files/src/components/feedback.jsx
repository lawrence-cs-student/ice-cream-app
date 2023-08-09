import React from "react";
import Button from "./button";

export default function Feedback(props) {

    return (
        <div className="feedback-container">
            <div className="first-child">
                <form onSubmit={props.clicked}>
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Item name"></input>
                    <input onChange={props.change} value={props.value} placeholder="Feedback"></input>
                    <Button kind="SUBMIT"/>
                </form>
            </div>
            <div className="second-child">
                <div className="output">
                    <img src="https://i.redd.it/fwlb9v0kv7f31.jpg"></img>
                    <h1>{props.data}</h1>
                    <img src="ice-cream.png"></img>
                </div>
            </div>
            <h1>SUNDAE SERENITY</h1>
        </div>
    )
}
