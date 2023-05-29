import React from 'react';
import { NavLink } from "react-router-dom";
import { blogData } from '../assets/blogData';
import bg_image from '../assets/images/travel_1.svg';
import BlogItemCard from '../shared/UI/BlogItemCard';
import './Home.css';
function Home(props) {
    return (
        <div
            className='page-container'
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}
        >
            <div className="home-wrapper">
                {blogData.map((blog) => <BlogItemCard
                    bg_image={blog.image}
                    blog_type={blog.type}
                    blog_owner_image={blog.owner_image}
                    owner={blog.owner}
                    date={blog.date}
                    title={blog.title}
                    desc={blog.text}
                    key={blog.id}
                />)}
                <div className="home_footer">
                    <div className="home_footer_wrapper">
                        <p>Want to read more?</p>
                        <NavLink className="home_read_more">
                            Visit Blog Archive
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;