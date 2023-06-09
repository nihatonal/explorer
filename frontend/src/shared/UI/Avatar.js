import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import AddPost from '../../posts/AddPost';

import './Avatar.css';
function Avatar(props) {
    const [showDrop, setShowDrop] = useState(false);
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
            <div className={showDrop ? "avatar_drop_menu show_drop_menu" : "avatar_drop_menu"}

            >
                <NavLink className="avatar_drop_menu_item" to='/'>My Profile</NavLink>
                <NavLink className="avatar_drop_menu_item" to='/'>My Articles</NavLink>
                <button onClick={props.showArticleModal} className="avatar_drop_menu_item">Add Article</button>
                <button onClick={props.logOutHandler} className="avatar_drop_menu_item">Log out</button>
            </div>
            <Modal showModal={props.articleModal} closeModal={props.closeArticleModal} className='modal_article'>
                <AddPost />
            </Modal>
        </div >
    );
}

export default Avatar;