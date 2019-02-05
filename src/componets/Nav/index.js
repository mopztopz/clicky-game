import React from "react";
import Message from "../NavMess";



function Nav(props){
    return(
        <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Mopz Topz Clicky Game!</a>
            </li>
            <Message Score= {props.score} topScore={props.topScore} />
            <li>
                Score: {props.score} Top Score: {props.topScore}
            </li>
        </ul>
        </nav>
    );
}

export default Nav;