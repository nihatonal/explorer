import React from 'react';
import moment from 'moment';

import './BlogItemCardMini.css'
function BlogItemCardMini(props) {
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    return (
        <div className="blog_minicard_container">
            <div className="blog_minicard_wrapper">
                <div className="blog_minicard_image_wrapper p-24"
                    style={{ backgroundImage: `url(${props.bg_image})` }}
                >
                    <div className="blog_minicard_image-content_wrapper">
                        <div className="blog_minicard_owner_wrapper">
                            <img src={props.blog_owner_image} alt={props.blog_owner_image} className='blog_minicard_owner_image' />
                            <p className="blog_minicard_owner_name">{props.owner}</p>
                            <p className="blog_minicard_date">{getDate(props.date)}</p>
                        </div>
                    </div>
                </div>
                <p className="blog_minicard_title">{props.title}</p>
            </div>
        </div>
    );
}

export default BlogItemCardMini;