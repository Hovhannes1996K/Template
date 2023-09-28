import React from "react";
import "./style.css";
import logo from "./images/simple-house-logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="head">
                <img src={logo}  alt="" />
                <span>Simple House</span>
                <p>new restaurant template</p>
            </div>
            <div className="navigation">
                <ul>
                    <li><NavLink className="links" to="/">Home</NavLink></li>
                    <li><NavLink className="links" to="/about">About</NavLink></li>
                    <li><NavLink className="links" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </header>
    )

    //Navlinky avelacnum e class
}