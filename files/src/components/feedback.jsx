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
                    <img src="public/lyka.jpg"></img>
                    <h1>{props.data}</h1>
                    <img src="ice-cream.png"></img>
                </div>
            </div>
        </div>
    )
}
