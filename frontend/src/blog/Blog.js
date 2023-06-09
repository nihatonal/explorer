import React from 'react';
import moment from "moment";
import { NavLink } from 'react-router-dom';
import { blogData } from '../assets/blogData';
import bg_image from '../assets/images/bicycle.jpg';
import FeaturedItem from './components/FeaturedItem';
import LatestItem from './components/LatestItem';
import './Blog.css'
function Blog(props) {

    const favorite = blogData[6];
    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }
    const sortedArray = blogData.sort((a, b) => new moment(b.date).format('YYYYMMDD') - new moment(a.date).format('YYYYMMDD'))
    return (
        <div
            className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}
        >
            <div className="page-wrapper">
                <div className="blog_wrapper">
                    {/* {isLoading && (
                        <div className="center">
                            <LoadingSpinner />
                        </div>
                    )} */}
                    <div className="blog_left_wrapper">
                        <div className="single_blog_item_wrapper">
                            <div className="single_blog_image_wrapper"
                                style={{ backgroundImage: `url(${favorite.image})` }}
                            > <NavLink
                                to={`/categories/${favorite.type.toLowerCase()}/${favorite.owner}/${favorite.id}`}></NavLink>
                            </div>
                            <div className="single_blog_item_content">
                                <div className="single_blog_owner_wrapper">
                                    <img src={favorite.owner_image} alt={favorite.owner} className='single_blog_owner_image' />
                                    <p className="single_blog_owner_name">{favorite.owner}</p>
                                    <p className="single_blog_date">{getDate(favorite.date)}</p>
                                    <NavLink to={`/categories/${favorite.type.toLowerCase()}/${favorite.owner}/${favorite.id}`} id={favorite.id} className="single_blog_title">{favorite.title}</NavLink>
                                </div>
                                <div className="single_blog_desc">
                                    {favorite.text.slice(0, 150)}...
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_featured">
                        <div className="section_title_wrapper">
                            <h4 className="section_title blog_section_title">Featured Articles</h4>
                            <div className="section_title_line"></div>
                        </div>

                        <div className="blog_featured_items">
                            {sortedArray.slice(0, 5).map((item) => <FeaturedItem data={item} key={item.id} />)}
                        </div>
                    </div>
                    <div className="blog_latest">
                        <div className="section_title_wrapper">
                            <h4 className="section_title blog_section_title">Latest Articles</h4>
                            <div className="section_title_line"></div>
                        </div>
                        <div className="blog_latest_items">
                            {sortedArray.slice(0, 6).map((item) => <LatestItem data={item} key={item.id} />)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Blog;