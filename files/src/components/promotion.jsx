import React, {useState} from "react";
import Item from "./item";
import items from "../items";

export default function Promotion() {

    const itemStyle = {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position : 'relative',
        zIndex : 1,
      
    }

    const [currentId, setCurrentId] = useState(0);

    function idSetter(num) {
        setCurrentId(num);
    }

  
    return (
        <div id="promotion" className="promotion">
            <div className="selected-product">
                <div>
                    {currentId !== 0 ? ( 
                        <Item source={items[currentId].img} style={itemStyle}/>
                    ) : (
                        <Item source={items[currentId].img} style={itemStyle} />
                    )}
                </div>
                <div className="item-features">
                    <h1>{items[currentId].name}</h1>
                    <h2>{items[currentId].price}</h2>
                    <button className="selected-item-buy">Buy</button>
                </div>
            </div>
            <div className="promotion-container">
                {items.map((product, index) => (
                    <Item 
                        onMouseOver={idSetter}
                        key={index} 
                        source={product.img}
                        number={index}  
                    />
                ))}
            </div>
        </div>
    )
}

