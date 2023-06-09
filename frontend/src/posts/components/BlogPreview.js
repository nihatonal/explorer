import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';


import './BlogPreview.css'
function BlogPreview(props) {
    const bottomRef = useRef(null);
    const [selected, selectedPost] = useState();
    useEffect(() => {
        selectedPost(props.data)
    }, [props.data])

    const getDate = (date) => {
        return moment(date).format("MMMM") + ' ' + moment(date).format("DD") + ', ' + moment(date).format("YYYY")
    }

    const scrollToLastFruit = () => {
        const lastChildElement = bottomRef.current?.lastElementChild;
        lastChildElement?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToLastFruit();
    }, [props.text]);


    return (
        <div className='page-container'
            style={{ backgroundImage: `linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${selected && selected.image})` }}>
            <div className="page-wrapper">
                {
                    selected && <div className="single_blog_item_wrapper">
                        <div className="single_blog_image_wrapper"
                            style={{ backgroundImage: `url(${selected.image})` }}
                        >
                        </div>
                        <div className="single_blog_item_content">
                            <div className="single_blog_owner_wrapper">
                                <img src={selected.owner_image} alt={selected.owner} className='single_blog_owner_image' />
                                <p className="single_blog_owner_name">{selected.owner}</p>
                                <p className="single_blog_date">{getDate(selected.date)}</p>
                                <p className="single_blog_title">{selected.title}</p>
                            </div>
                            {/* {props.data && <textarea className="single_blog_desc"
                                style={tx[1] && { height: `${tx[1].scrollHeight}px` }}
                                value={selected.text}
                            />} */}

                            <div className="single_blog_desc" ref={bottomRef}>{props.text}</div>

                        </div>
                    </div>

                }
            </div>
        </div >
    );
}

export default BlogPreview;