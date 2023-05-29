import React from 'react';

import './Footer.css';
function Footer(props) {
    return (
        <div className='footer'>
            <div className="footer_wrapper">
                <p className="footer_item">Copyright © Explorer</p>
                <p className="footer_item">- Images used for demonstration purpose only (<span>Licenses</span>)</p>
                <p className="footer_item">Copyright © Explorer <span>Studio Corvus</span></p>
                <p className="footer_item">Powered by <span>Webflow</span></p>
            </div>

        </div>
    );
}

export default Footer;