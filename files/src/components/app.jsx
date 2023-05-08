import React, {useState} from "react";
import Navbar from "./navbar";
import Header from "./header";
import Feedback from "./feedback";
import Promotion from "./promotion";
import Footer from "./footer"



export default function App() {

    const [display, setDisplay] = useState("Tasty");
    const [feedback, setFeedback] = useState("");

    function handleClick(event) {
        event.preventDefault();
        setDisplay(feedback);
        setFeedback("")
    }

    function handleChange(event) {
        setFeedback(event.target.value);
    }


    return (
        <div className="main">
            <Navbar/>
            <Header />
            <Promotion/>
            <Feedback clicked={handleClick} data={display} change={handleChange} value={feedback}/>
            <Footer />
        </div>
    ) 
}