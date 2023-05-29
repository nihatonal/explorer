import React from 'react';

import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";

import './SocialBar.css';
function SocialBar(props) {
    return (
        <div className='socialbar-wrapper'>
            <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                <FaYoutube />
            </a>
            <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                <FaVk />
            </a>
            <a href="https://www.youtube.com" rel="noreferrer" target='_blank' className="social-item">
                <FaTelegramPlane />
            </a>
        </div>
    );
}

export default SocialBar;