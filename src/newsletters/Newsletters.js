import React from 'react';
import NewslettersForm from './components/NewslettersForm';
import NewslettersInbox from './components/NewslettersInbox';
import bg_image from '../assets/images/news.jpg';
import './Newsletters.css';
function Newsletters(props) {

    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}>
            <div className="page-wrapper">
                <div className="newsletters_wrapper">
                    <div className="newsletters_content">
                        <h1 className="newsletters_title">
                            Let your horizon expand with us
                        </h1>
                        <p className="newsletters_subtitle">
                            Get the 5-minute newsletter keeping 2M+ innovators in the loop.
                        </p>
                        <NewslettersForm />
                    </div>

                    <NewslettersInbox />


                </div>
            </div>
        </div >
    );
}

export default Newsletters;