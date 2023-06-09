import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import './BlogItemCard.css';

function BlogItemCard(props) {
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    return (
        <div className="blog_card_container">
            <div className="blog_card_wrapper">
                <div className="blog_card_image_wrapper p-60"
                    style={{ backgroundImage: `url(${props.bg_image})` }}
                >
                    <div className="blog_card_type">
                        <p className="blog_card_type_text">{props.blog_type}</p>
                    </div>
                    <div className="blog_card_image-content_wrapper">
                        <div className="blog_card_owner_wrapper">
                            <img src={props.blog_owner_image} alt={props.blog_owner_image} className='blog_card_owner_image' />
                            <p className="blog_card_owner_name">{props.owner}</p>
                            <p className="blog_card_date">{getDate(props.date)}</p>
                        </div>
                        <p className="blog_card_title">{props.title}</p>
                    </div>
                </div>
                <div className="blog_card_desc_wrapper p-60">
                    <p className="blog_card_desc">
                        {props.desc.slice(0, 250)}...
                    </p>
                    <NavLink to={`/categories/${props.blog_type.toLowerCase()}/${props.owner}/${props.id}`} className="blog_card_button">
                        <p>Continue Reading</p>
                        <HiArrowLongRight />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default BlogItemCard;