import React from 'react';
import { NavLink } from "react-router-dom";
import { blogData } from '../assets/blogData';
import BlogItemCardMini from '../shared/UI/BlogItemCardMini';
import './FeaturedStories.css';
function FeaturedStories(props) {
    const nums = new Set();
    const length = blogData.length - 1;
    while (nums.size !== 3) {
        nums.add(Math.floor(Math.random() * length));
    }
    const selected = [blogData[[...nums][0]], blogData[[...nums][1]], blogData[[...nums][2]]]
    // console.log(selected);
    return (
        <div className='featured_container'>
            <div className="featured_wrapper">
                <h3 className="section_title">Featured Stories</h3>
                <p className="section_subtitle">Did you read our personal favorites?</p>
                <div className="featured_stories_items_wrapper">
                    {
                        selected.map((blog) => <BlogItemCardMini
                            bg_image={blog.image}
                            blog_type={blog.type}
                            blog_owner_image={blog.owner_image}
                            owner={blog.owner}
                            date={blog.date}
                            title={blog.title}
                            key={blog.id}
                        />)
                    }
                </div>
                <p className="featured_footer_text">
                    Want to read all of our stories?
                    <span><NavLink> Read the full blog</NavLink></span>
                </p>
            </div>
        </div>
    );
}

export default FeaturedStories;