import React from "react";
import Button from "./button";

export default function Header() {
    return (
        <div className="header">
                <div className='item-1'>
                    <h1>"Indulge in Sweet Bliss: Discover Our Handcrafted Ice Cream Delights"</h1>
                    <p>At our ice cream shop, we take pride in handcrafting every scoop of our delicious ice cream. Using only the freshest and highest-quality ingredients, we offer a wide variety of flavors and toppings to satisfy any sweet tooth. From classic favorites to unique and inventive creations, we are dedicated to providing our customers with an unforgettable ice cream experience. Come visit us and indulge in sweet bliss with every scoop!</p>
                    <Button kind="CONTACT US"/>
                </div>
                <div className='item-2'>
                    <img src='https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&w=1600'></img>
                </div>
        </div>
    )
}
