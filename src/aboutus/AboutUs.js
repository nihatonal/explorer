import React from 'react';
import { NavLink } from 'react-router-dom';
import bg_image from '../assets/images/traveller.jpg'
import { GiWorld } from 'react-icons/gi';
import { SiIconfinder } from 'react-icons/si';
import { FaFirstOrder } from 'react-icons/fa';
import './AboutUs.css'
function AboutUs(props) {

    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${bg_image})` }}>
            <div className="page-wrapper">
                <div className="about_us_wrapper">
                    <h3 className='section_title'>Things Go Better With Us</h3>
                    <p className="section_subtitle">
                        We are here to share experiences each other.
                    </p>
                    <p className='blog_card_desc p-60'>
                        Wanna make your life more interesting?<br></br> If your answer is "YES", you are in the right place.

                        {/* Traveling comes with a lot of new experiences and discoveries.
                        You do not only discover new places and traditions, but you also get to know yourself better. */}


                    </p>
                    <NavLink to='/contactus' className='primary_button'>Contact Us</NavLink>
                    <div className="about_us_image"></div>
                    <div className="about_us_items_wrapper p-60">
                        <div className="about_us_item">
                            <SiIconfinder className='about_us_item_icon' />
                            <h4 className="about_us_item_title">Creativity</h4>
                            <p className="about_us_item_text">
                                It's the ability to think outside the box.
                                We make decisions, create something new and
                                generate a lot of ideas.
                            </p>
                        </div>
                        <div className="about_us_item">
                            <GiWorld className='about_us_item_icon' />
                            <h4 className="about_us_item_title">Worldwide</h4>
                            <p className="about_us_item_text">
                                The world is both big and small at the same time.
                                So you really do need to know how much of the world you've discovered.
                            </p>
                        </div>
                        <div className="about_us_item">
                            <FaFirstOrder className='about_us_item_icon' />
                            <h4 className="about_us_item_title">Unique</h4>
                            <p className="about_us_item_text">
                                Do not think your story is the same as millions of others.
                                You just need to find the right way to tell..
                            </p>
                        </div>
                    </div>
                    <div className="about_us_desc_wrapper p-60">
                        <p className="about_us_desc">
                            We created this website to explore the best interesting stories and experiences.
                            What you have been through can guide other people, also it could inspire them to open up to the world.
                            <br></br>
                            Your story could become a legend. Maybe it's the subject of movies or books.
                            <br></br>
                            Don't be afraid to share!
                            You can create your own opportunity...
                        </p>
                    </div>
                    <div className="about_us_image"></div>
                    <div className="about_us_desc_wrapper p-60">
                        <p className="about_us_desc">
                            We are all different. We were born in diffrent cities, at different times,
                            we love different music, food, movies. But we have something that unites us all.
                            It is our blog. We are its heart. We are not just a team, we are a family.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;