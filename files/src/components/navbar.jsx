import React from "react";
import { FaHome, FaFacebookMessenger, FaInstagram, FaSearch } from 'react-icons/fa';


export default function Navbar() {
    return (
        <div className="navbar">
                <ul>
                    <li><FaHome /></li>
                    <li><FaFacebookMessenger /></li>
                    <li className="insta"><FaInstagram /></li>
                </ul>
                <li><FaSearch /></li>
        </div>
    )
}