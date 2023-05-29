import React from 'react';

import bg_image from '../assets/images/travel_1.svg'
import './Home.css';
function Home(props) {
    return (
        <div
            className='page-container'
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}
        >
            <div className="home-wrapper">

            </div>
        </div>
    );
}

export default Home;