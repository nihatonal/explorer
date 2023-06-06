import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import Logo from '../UI/Logo';
import Hamburger from './Hamburger';
import SideNavBar from './SideNavBar';


import './MainNavigation.css';
function MainNavigation(props) {
    const [scrolled, setScrolled] = useState(false);
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

    useEffect((_) => {
        const handleScroll = (_) => {
            if (window.pageYOffset > 90) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return (_) => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className={scrolled ? 'header header_fixed' : 'header'}>
            <SideNavBar
                openDrawerHandler={openDrawerHandler}
                closeDrawer={closeDrawerHandler}
                drawerIsOpen={drawerIsOpen}
                onClick={() => {
                    openDrawerHandler(false)
                }}
                className={'hide-sidebar'}
            />
            <div className={scrolled ? "main_header main_header_fixed" : 'main_header'}>
                {/* <ReactSVG src={Logo} /> */}
                <Logo />
                <NavLinks />
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
            </div>



        </div>
    );
}

export default MainNavigation;