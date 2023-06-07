import React, { useState, useEffect, useContext } from 'react';
import NavLinks from './NavLinks';
import Logo from '../UI/Logo';
import Hamburger from './Hamburger';
import SideNavBar from './SideNavBar';
import Modal from '../UI/Modal'
import SignUp from '../../user/components/SignUp';
import { AuthContext } from '../../shared/context/auth-context';

import './MainNavigation.css';
function MainNavigation(props) {
    const auth = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(!drawerIsOpen);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    const openSignUpModal = () => {
        setOpenModal(!openModal)
    }
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
    useEffect(() => {
        if (auth.isLoggedIn === true) {
            setOpenModal(false)
        }
    }, [auth.isLoggedIn]);


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
                <NavLinks openSignUp={openSignUpModal} />
                <Hamburger
                    show={drawerIsOpen}
                    onClick={openDrawerHandler}
                />
            </div>

            <Modal showModal={openModal} closeModal={() => openSignUpModal(false)} ><SignUp /></Modal>

        </div>
    );
}

export default MainNavigation;