import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName='nav-active' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='nav-active' to="/dictionary">Dictionary</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='nav-active' to="/week1">Week 1</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;