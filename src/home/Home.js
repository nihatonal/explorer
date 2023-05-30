import React from 'react';
import { NavLink } from "react-router-dom";
import { blogData } from '../assets/blogData';
import bg_image from '../assets/images/explorer.jpg';
import BlogItemCard from '../shared/UI/BlogItemCard';
import './Home.css';
function Home(props) {
    return (
        <div
            className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}
        >
            <div className="page-wrapper">
                {blogData.slice(0, 3).map((blog) => <BlogItemCard
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
                        <NavLink to='/' className="primary_button">
                            Visit Blog Archive
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;