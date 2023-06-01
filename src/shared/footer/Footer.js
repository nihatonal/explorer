import React from 'react';

import './Footer.css';
function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer_wrapper">
                <p className="footer_item">Copyright © Explore Yourself</p>
                <p className="footer_item">- Images used for demonstration purpose only (<span>Licenses</span>)</p>
                <p className="footer_item">Copyright © Explore Yourself <span>Studio Nonal</span></p>
                <p className="footer_item">Powered by <span>NonalProductions</span></p>
            </div>

        </div>
    );
}

export default Footer;