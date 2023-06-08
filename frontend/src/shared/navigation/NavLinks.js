import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Avatar from '../UI/Avatar';
import './NavLinks.css';
function NavLinks(props) {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedUser, setLoadedUser] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/users/`
                );
                setLoadedUser(responseData.users.filter(user => user.id === auth.userId)[0]);
            } catch (err) { }
        };
        fetchUsers();

    }, [sendRequest, auth.userId]);
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
                to="/newsletters"
                onClick={props.closeDrawer}
            >
                Newsletters
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
                to="/aboutus"
                onClick={props.closeDrawer}
            >
                About Us
            </NavLink>
            {!auth.isLoggedIn ? <button
                className={"nav-item nav-button"}
                onClick={props.openSignUp}
            >
                Sign In
            </button> : loadedUser && <Avatar
                image={`http://localhost:5000/${loadedUser.image}`} alt={loadedUser.name}
                articleModal={props.articleModal}
                showArticleModal={props.showArticleModal}
                closeArticleModal={props.closeArticleModal}
                logOutHandler={props.logOutHandler}
            />}
        </div>
    );
}

export default NavLinks;