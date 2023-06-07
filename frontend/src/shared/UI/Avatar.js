import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


import './Avatar.css';
function Avatar(props) {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <div className={`avatar ${props.className}`}
            style={props.style}
            onClick={() => setShowDrop(!showDrop)}
        >
            <img
                src={props.image}
                alt={props.alt}
                style={{ width: props.width, height: props.width }}
            />
            <div className="avatar_drop_menu"
                style={showDrop ? { top: '0' } : null}
            >
                <NavLink className="avatar_drop_menu_item" to='/'>Profile</NavLink>
                <NavLink className="avatar_drop_menu_item" to='/'>My Articles</NavLink>
                <button className="avatar_drop_menu_item">Add Article</button>

            </div>
        </div>
    );
}

export default Avatar;