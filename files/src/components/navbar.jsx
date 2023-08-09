import React from "react";
import { FaHome, FaFacebookMessenger, FaInstagram, FaSearch } from 'react-icons/fa';


export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <li><FaHome /></li>
                <li><FaFacebookMessenger /></li>
                <li><FaInstagram /></li>
                <li><FaSearch /></li>
            </nav>
        </div>
    )
}
