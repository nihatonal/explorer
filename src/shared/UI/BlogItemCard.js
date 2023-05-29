import React from 'react';


import { HiArrowLongRight } from 'react-icons/hi2';
import Profile from '../../assets/images/profiles/traveller_1.svg';
import BG from '../../assets/images/travel_1.svg'
import './BlogItemCard.css';

function BlogItemCard(props) {

    const text = 'In vestibulum convallis odio, sed tincidunt leo lacinia non. Maecenas nec gravida ligula, ac fermentum dolor. Aenean imperdiet, risus sed ornare cursus, ex justo egestas tortor, quis hendrerit risus lectus vitae risus. Donec iaculis metus nisl, at finibus tortor posuere vitae. Ut et feugiat odio, condimentum dapibus ex. Pellentesque ut nibh quam. Nulla facilisi. Vestibulum sit amet ligula lectus. Nulla facilisi. Suspendisse sit amet nisi eu magna maximus vehicula eu ut justo. Nullam at odio quam. In commodo lacinia diam, sit amet eleifend elit ultrices sit amet. Nam quis metus mauris. Quisque leo velit, sodales tempus elit sit amet, volutpat finibus est. Mauris in iaculis felis, ut dignissim lorem. Nam porta finibus diam et tristique.';

    return (
        <div className="blog_card_container">
            <div className="blog_card_wrapper">
                <div className="blog_card_image_wrapper"
                    style={{ backgroundImage: `url(${props.bg_image})` }}
                >
                    <div className="blog_card_type">
                        <p className="blog_card_type_text">{props.blog_type}</p>
                    </div>
                    <div className="blog_card_image-content_wrapper">
                        <div className="blog_card_owner_wrapper">
                            <img src={props.blog_owner_image} alt={props.blog_owner_image} className='blog_card_owner_image' />
                            <p className="blog_card_owner_name">{props.owner}</p>
                            <p className="blog_card_date">{props.date}</p>
                        </div>
                        <p className="blog_card_title">{props.title}</p>
                    </div>
                </div>
                <div className="blog_card_desc_wrapper">
                    <p className="blog_card_desc">
                        {props.desc.slice(0, 255)}...
                    </p>
                    <div className="blog_card_button">
                        <p>Continue Reading</p>
                        <HiArrowLongRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogItemCard;