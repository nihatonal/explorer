import React from 'react';
import { NavLink } from 'react-router-dom';
import { blogData } from '../assets/blogData'
import bg_image from '../assets/images/wall.jpg';

import './Categories.css';
function Categories(props) {
    var categories_data = [...new Set(blogData.map(function (a) { return a.type; }))];

    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}>
            <div className="page-wrapper">
                <div className="categories_wrapper">
                    {categories_data.map((item) =>
                        <div className="categories_group_wrapper">
                            <h3 className="categories_items_title">{item}</h3>
                            <div className="categories_items_wrapper">
                                {blogData.filter((el) => el.type === item).map((blog) =>
                                    <NavLink to={`/categories/${item.toLowerCase()}/${blog.owner}/${blog.id}`} className="categories_item_container">
                                        <div className="categories_item_wrapper">
                                            <div className="categories_item_image_wrapper"
                                                style={{ backgroundImage: `url(${blog.image})` }}
                                            >
                                                <div className="categories_item_image-content_wrapper">
                                                    <div className="categories_item_owner_wrapper">
                                                        <img src={blog.owner_image} alt={blog.image} className='categories_item_owner_image' />
                                                        <p className="categories_item_owner_name">{blog.owner}</p>
                                                        <p className="categories_item_date">{blog.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="categories_item_title">{blog.title}</p>
                                        </div>
                                    </NavLink>
                                )}
                                <NavLink to={`/categories/${item.toLowerCase()}`} className="categories_item_all_button">To all...</NavLink>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Categories;