import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { blogData } from '../../assets/blogData';
import bg_image from '../../assets/images/wall.jpg';

import './SingleBlogItem.css'
function SingleBlogItem(props) {
    const [selected, selectedPost] = useState()
    const selected_post = useParams().bid;
    useEffect(() => {
        selectedPost(blogData.filter((item) => item.id.toLowerCase() === selected_post)[0])
    }, [selected_post])
    //console.log(selected)


    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${selected && selected.image})` }}>
            <div className="page-wrapper">
                {
                    selected && <div className="single_blog_item_wrapper">
                        <div className="single_blog_image_wrapper p-60"
                            style={{ backgroundImage: `url(${selected.image})` }}
                        >
                        </div>
                        <div className="single_blog_item_content">
                            <div className="single_blog_owner_wrapper">
                                <img src={selected.owner_image} alt={selected.owner} className='single_blog_owner_image' />
                                <p className="single_blog_owner_name">{selected.owner}</p>
                                <p className="single_blog_date">{selected.date}</p>
                                <p className="single_blog_title">{selected.title}</p>
                            </div>
                            <div className="single_blog_desc">
                                {selected.text}
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    );
}

export default SingleBlogItem;