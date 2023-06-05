import React from 'react';


import './NewsLettersFeature.css';
function NewsLettersFeature(props) {
    return (
        <div className="newsletters_feature_wrapper">
            <div className="newsletters_feayute_items_wrapper">
                <div className="newsletters_feayute_item">
                    <h4 className="newsletters_feature_item_title">Always Free</h4>
                    <p className="newsletters_feature_item_desc">A daily newsletter, absolutely free and delivered by 9am Pacific</p>
                </div>
                <div className="newsletters_feayute_item">
                    <h4 className="newsletters_feature_item_title">100% Fresh</h4>
                    <p className="newsletters_feature_item_desc">Get the latest in startups, tech, and all things business news</p>
                </div>
                <div className="newsletters_feayute_item">
                    <h4 className="newsletters_feature_item_title">No Bullsh*t</h4>
                    <p className="newsletters_feature_item_desc">Stories and insights you won’t find anywhere else, told straight</p>
                </div>
            </div>
        </div>
    );
}

export default NewsLettersFeature;