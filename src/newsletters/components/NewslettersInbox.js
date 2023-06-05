import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import phone from '../../assets/images/phone_frame.png'
import { blogData } from '../../assets/blogData';
import Logo from '../../shared/UI/Logo'
import './NewslettersInbox.css'
function NewslettersInbox(props) {
    const [blogItem, setBlogItem] = useState()
    const [seconds, setSeconds] = useState(0);
    const selected = blogData.slice(0, 3);

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            setSeconds(seconds => seconds + 1)
        }, 2000);
        if (seconds === 3) {
            setSeconds(0)
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [seconds]);

    useEffect(() => {
        if (seconds < 3) {
            setBlogItem(selected[seconds].id);
        } else return
    }, [seconds]);


    return (
        <div className="newsletter_inbox_wrapper">
            <div className="newsletter_inbox_header">
                <h3>Inbox</h3>
                <div className="newsletter_inbox_search_bar">
                    <BiSearch /> <p>Search</p>
                </div>
            </div>
            <div className="newsletter_inbox_items">

                <div className="newsletter_inbox_item"
                    onMouseEnter={() => {
                        setBlogItem(selected[0].id)
                        setSeconds(0)
                    }}>
                    <NavLink className='newsletter_inbox_item_link' to={`/categories/${selected[0].type.toLowerCase()}/${selected[0].owner}/${selected[0].id}`}></NavLink>
                    <span></span>
                    <AiFillStar />
                    <h4 style={selected[0].id === blogItem ? { fontWeight: '600' } : null}>{selected[0].title.slice(0, 50)}</h4>
                </div>
                <div className="newsletter_inbox_item" style={{ border: 'none' }}>
                    <span></span>
                    <AiOutlineStar style={{ color: '#ecebeb' }} />
                    <span className='newsletter_inbox_fake'></span>
                </div>
                <div className="newsletter_inbox_item"
                    onMouseEnter={() => {
                        setBlogItem(selected[1].id)
                        setSeconds(1)
                    }}>
                        <NavLink className='newsletter_inbox_item_link' to={`/categories/${selected[1].type.toLowerCase()}/${selected[1].owner}/${selected[1].id}`}></NavLink>
                    <span></span>
                    <AiFillStar />
                    <h4 style={selected[1].id === blogItem ? { fontWeight: '600' } : null}>{selected[1].title.slice(0, 50)}</h4>
                </div>
                <div className="newsletter_inbox_item" style={{ border: 'none' }}>
                    <span></span>
                    <AiOutlineStar style={{ color: '#ecebeb' }} />
                    <span className='newsletter_inbox_fake'></span>
                </div>
                <div className="newsletter_inbox_item" onMouseEnter={() => setBlogItem(selected[2].id)}>
                <NavLink className='newsletter_inbox_item_link' to={`/categories/${selected[2].type.toLowerCase()}/${selected[2].owner}/${selected[2].id}`}></NavLink>
                    <span></span>
                    <AiFillStar />
                    <h4 style={selected[2].id === blogItem ? { fontWeight: '600' } : null}>{selected[2].title.slice(0, 50)}...</h4>
                </div>

            </div>
            <div className="newsletter_inbox_phone_wrapper">

                <img src={phone} alt='phone' />
                <div className="newsletter_inbox_phone_bg"></div>

                {selected.map((item) =>
                    <div className={"newsletter_inbox_phone_content"}
                        style={item.id === blogItem ? { opacity: '1' } : null}
                        key={item.id}
                    >
                        <NavLink className='newsletter_inbox_item_image_link' to={`/categories/${item.type.toLowerCase()}/${item.owner}/${item.id}`}></NavLink>
                        <Logo />
                        <img src={item.image} alt={item.title} />
                        <h3 className="newsletter_inbox_phone_title">{item.title}</h3>
                        <p className="newsletter_inbox_phone_desc">{item.text.slice(0, 450)}</p>
                    </div>
                )}

            </div>

        </div >
    );
}

export default NewslettersInbox;