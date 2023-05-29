import React from 'react';
import { NavLink } from "react-router-dom";

import './NavLinks.css';
function NavLinks(props) {
    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/"
                onClick={props.closeDrawer}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/blog"
                onClick={props.closeDrawer}
            >
                Blog
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/categories"
                onClick={props.closeDrawer}
            >
                Categories
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/pick_category"
                onClick={props.closeDrawer}
            >
                Pick category
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/aboutus"
                onClick={props.closeDrawer}
            >
                About Us
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "nav-item active-nav-item" : "nav-item"
                }
                to="/contactus"
                onClick={props.closeDrawer}
            >
                Contact Us
            </NavLink>
        </div>
    );
}

export default NavLinks;