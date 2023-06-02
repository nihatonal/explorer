import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './FeaturedItem.css';

function FeaturedItem({ data }) {
    const getDate = (date) => {
        return moment(date).format("MMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    return (
        <div className='featured_item_wrapper'>
            <NavLink className='featured_link' to={`/categories/${data.type.toLowerCase()}/${data.owner}/${data.id}`}></NavLink>
            <div className="featured_item_image_wrapper">
                <img className='featured_item_img' src={data.image} alt={data.owner} />
                <p className='featured_item_type'>{data.type}</p>
            </div>
            <h4 className='featured_item_title'>{data.title}</h4>
            <p className='featured_item_owner'>{data.owner}</p>
            <p className="featured_item_date">{getDate(data.date)}</p>
            <span className='featured_item_line'></span>
        </div>
    );
}

export default FeaturedItem;