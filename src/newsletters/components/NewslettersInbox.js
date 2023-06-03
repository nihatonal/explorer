import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { blogData } from '../../assets/blogData';
import './NewslettersInbox.css'
function NewslettersInbox(props) {
    const nums = new Set();
    const length = blogData.length - 1;
    while (nums.size !== 3) {
        nums.add(Math.floor(Math.random() * length));
    }
    const selected = [blogData[[...nums][0]], blogData[[...nums][1]], blogData[[...nums][2]]];
    console.log(selected);
    return (
        <div className="newsletter_inbox_wrapper">
            <div className="newsletter_inbox_header">
                <h3>Inbox</h3>
                <div className="newsletter_inbox_search_bar">
                    <BiSearch /> <p>Search</p>
                </div>
            </div>
            <div className="newsletter_inbox_items">
                <div className="newsletter_inbox_item">
                    <span></span>
                    <AiFillStar />
                    <h4>{selected[0].title}</h4>
                </div>
                <div className="newsletter_inbox_item" style={{ border: 'none' }}>
                    <span></span>
                    <AiOutlineStar style={{ color: '#ecebeb' }} />
                    <span className='newsletter_inbox_fake'></span>
                </div>
                <div className="newsletter_inbox_item">
                    <span></span>
                    <AiFillStar />
                    <h4>{selected[1].title}</h4>
                </div>
                <div className="newsletter_inbox_item" style={{ border: 'none' }}>
                    <span></span>
                    <AiOutlineStar style={{ color: '#ecebeb' }} />
                    <span className='newsletter_inbox_fake'></span>
                </div>
                <div className="newsletter_inbox_item">
                    <span></span>
                    <AiFillStar />
                    <h4>{selected[2].title}</h4>
                </div>
            </div>
        </div>
    );
}

export default NewslettersInbox;