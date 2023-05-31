import React, { useState } from 'react';
import { ReactSVG } from 'react-svg'
import NavLinks from './NavLinks';
// import Logo from '../../assets/images/logo.svg';
import Logo from '../UI/Logo'
import SideNavBar from './SideNavBar';


import './MainNavigation.css';
function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    // var categories_data = [...new Set(blogData.map(function (a) { return a.type; }))];

    // const categories = <div className='dropmenu_wrapper'>
    //     {categories_data.map((item) => <NavLink to={`/blog/${item.toLowerCase()}`} className='dropmenu_item'>{item}</NavLink>)}
    // </div>


    return (
        <div className='header'>
            {/* <SideNavBar
                openDrawerHandler={openDrawerHandler}
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    openDrawerHandler(false)
                }}
                className={cart.booking ? 'hide-sidebar' : null}
            /> */}
            <div className="main_header">
                {/* <ReactSVG src={Logo} /> */}
                <Logo />
                <NavLinks />
            </div>


        </div>
    );
}

export default MainNavigation;