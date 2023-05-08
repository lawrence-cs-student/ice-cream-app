import React from "react";

export default function Item(props){

    const defaultOnMouseOver = () => {}
    return (
        <div 
            className="product" 
            onMouseOver={() => (props.onMouseOver || defaultOnMouseOver)(props.number)} 
        >
            <img src={props.source} />
        </div>
    )
}