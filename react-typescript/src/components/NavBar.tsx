import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-1 px-1">
                <a href="/" className="brand-logo">React + Typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
