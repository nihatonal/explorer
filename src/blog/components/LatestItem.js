import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import './LatestItem.css'
function LatestItem({ data }) {
    const getDate = (date) => {
        return moment(date).format("MMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    return (
        <div className='latest_item_wrapper'>
            <NavLink className='latest_link' to={`/categories/${data.type.toLowerCase()}/${data.owner}/${data.id}`}></NavLink>
            <div className="latest_item_image_wrapper">
                <img className='latest_item_img' src={data.image} alt={data.owner} />
                <p className='featured_item_type'>{data.type}</p>
            </div>
            <h4 className='latest_item_title'>{data.title}</h4>
            <p className='latest_item_owner'>{data.owner}</p>
            <p className="latest_item_date">{getDate(data.date)}</p>
            <span className='latest_item_line'></span>
        </div>
    );
}

export default LatestItem;