import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './LatestPostItem.css';

function LatestPostItem({ data }) {
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    return (
        <div className='latest_item_wrapper'>
            <NavLink className='latest_link' to={`/categories/${data.type.toLowerCase()}/${data.owner}/${data.id}`}></NavLink>
            <img className='latest_item_img' src={data.image} alt={data.owner} />
            <h4 className='latest_item_title'>{data.title}</h4>
            <p className='latest_item_owner'>{data.owner}</p>
            <p className="latest_item_date">{getDate(data.date)}</p>
        </div>
    );
}

export default LatestPostItem;