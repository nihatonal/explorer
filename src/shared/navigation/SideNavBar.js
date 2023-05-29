import React from 'react';
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger';
import SocialBar from './SocialBar';
import NavLinks from './NavLinks';
import './SideNavBar.css';
function SideNavBar(props) {

    return (
        <div className={props.drawerIsOpen ? `sidebar_wrapper open_sidebar` : `sidebar_wrapper ${props.className}`}>
            <div className='sidebar-header'>
                <NavLink to='/' onClick={props.closeDrawer}>
                    {/* <img src={Logo} alt='logo' /> */}
                </NavLink>


                <Hamburger
                    show={props.drawerIsOpen}
                    onClick={props.openDrawerHandler}
                />
            </div>
            <NavLinks
                style={props.drawerIsOpen ? { left: 0 } : null}
                className='sidebar-navlinks'
                onClick={props.onClick}
                closeDrawer={props.closeDrawer} />
            <div className='socialbar-wrapper'>
                <SocialBar />
            </div>

        </div>
    );
}

export default SideNavBar;