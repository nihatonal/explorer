import React from 'react';
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger';
import SocialBar from './SocialBar';
import NavLinks from './NavLinks';
import './SideNavBar.css';
function SideNavBar(props) {

    return (
        <div className={props.drawerIsOpen ? `sidebar_wrapper open_sidebar` : `sidebar_wrapper ${props.className}`}>
            <NavLinks
                style={props.drawerIsOpen ? { top: 0 } : null}
                className='sidebar-navlinks'
                onClick={props.onClick}
                closeDrawer={props.closeDrawer}
                openSignUp={props.openSignUp}
                articleModal={props.articleModal}
                showArticleModal={props.showArticleModal}
                closeArticleModal={props.closeArticleModal}
                logOutHandler={props.logOutHandler}

            />
        </div>
    );
}

export default SideNavBar;