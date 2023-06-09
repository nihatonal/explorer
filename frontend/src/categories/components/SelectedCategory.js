import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { blogData } from '../../assets/blogData';
import bg_image from '../../assets/images/wall.jpg';
function SelectedCategory(props) {
    const selected_category = useParams().cname;
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    const selected = blogData.filter((item) => item.type.toLowerCase() === selected_category);
    console.log(selected)
    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}>
            <div className="page-wrapper">
                <div className="categories_wrapper">
                    <h3 className="categories_items_title" style={{ textTransform: 'uppercase' }}>{selected_category}</h3>
                    <div className="categories_group_wrapper">
                        <div className="categories_items_wrapper">
                            {selected.map((blog) =>
                                <NavLink to={`/categories/${selected_category.toLowerCase()}/${blog.owner}/${blog.id}`} id={blog.id} className="categories_item_container">
                                    <div className="categories_item_wrapper">
                                        <div className="categories_item_image_wrapper"
                                            style={{ backgroundImage: `url(${blog.image})` }}
                                        >
                                            <div className="categories_item_image-content_wrapper">
                                                <div className="categories_item_owner_wrapper">
                                                    <img src={blog.owner_image} alt={blog.image} className='categories_item_owner_image' />
                                                    <p className="categories_item_owner_name">{blog.owner}</p>
                                                    <p className="categories_item_date">{getDate(blog.date)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="categories_item_title">{blog.title}</p>
                                    </div>
                                </NavLink>
                            )}
                            {/* <NavLink to={`/categories/${item.toLowerCase()}`} className="categories_item_all_button">To all...</NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedCategory;