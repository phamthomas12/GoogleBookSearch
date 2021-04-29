import React from "react";
import { Link } from "react-router-dom";
import NavTitle from "./NavTitle";
import "../styles/Nav.css";

function Nav() {
   
    return (
        <>
        <div className="nav">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    <h1>Google Books</h1>
                </Link>
            {}
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                    Saved
                    </Link>
            </li>
        </ul>
       
        </div>
        <NavTitle />
        </>
         
    )
}

export default Nav;