import Logo from '../assets/jfp-logo.png';
import './header.css'
//Hamburger Icon
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

import React, {useState} from 'react';

function MobileMenuBar(){
    return (
        <div className="navbar-mobile-menu-wrapper">
    `       <ul className="navbar-mobile-menu">
                <li className='nav-link'>
                    <a href = '' className='montserrat-900'>About Me</a>
                </li>
                <li className='nav-link'>
                    <a href = '' className='montserrat-900'>Tools</a>
                </li>
                <li className='nav-link'>
                    <a href = '' className='montserrat-900'>Projects</a>
                </li>
                <li className='nav-link'>
                    <a href = '' className='montserrat-900'>Contact</a>
                </li>
            </ul>
        </div>
    );
}

function Header (){
    //Show Menu in Column if menu icon is clicked
    const [showMobileMenu, setMobileMenu] = useState(false);
    function handleShowMobileMenu(){
        //NOTE: Design mobile menu and UNDERSTAND
        setMobileMenu(!showMobileMenu);
        //NOTE: POP UP NAVBAR MENU HERE
    }
    //You use variables and put it in html class
    //cannot output object
    return (
        <header className="primary">
            <nav className="navbar-container">
                <div className="navbar-wrapper">
                    {/* NOTE: should be with https not www only */}
                    <div className="navbar-logo">
                        <a href="" >
                            <img src={Logo} alt="Logo Image" id = 'logo'></img>
                        </a>
                    </div>
                    <div className="navbar-menu-wrapper">
                            <IconContext.Provider value={{ color: "white", size: '2em' }}>
                                <div className="menu-icon" onClick={handleShowMobileMenu}>
                                    <GiHamburgerMenu />
                                </div>
                            </IconContext.Provider>;

    `                       <ul className="navbar-menu">
                            <li>
                                <div className='nav-divider'></div>
                            </li>
                            <li className='nav-link'>
                                <a href = '' className='montserrat-900'>About Me</a>
                            </li>
                            <li className='nav-link'>
                                <a href = '' className='montserrat-900'>Tools</a>
                            </li>
                            <li className='nav-link'>
                                <a href = '' className='montserrat-900'>Projects</a>
                            </li>
                            <li className='nav-link'>
                                <a href = '' className='montserrat-900'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Shows Mobile Menu */}
            {showMobileMenu && <MobileMenuBar />}
        </header>
        //NOTE: shortcut for creating div with classname
        //div.class_name_here --> automatically creates div container
    )
}
//MUST EXPORT to work
export default Header;