import {React, useState} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className={`header${isOpen?' open':''}`}>
            <p className='copyright'><span style={{fontFamily:'sans-serif'}}>&#169;</span> {new Date().getFullYear()}. NAK Concept LTD.<br></br><br></br>Designed by <a href='https://www.tsanghoilun.com' target='_blank'>TSANGHOILUN</a></p>
            <div>
                <Link to='/' onClick={() => {isOpen ? setIsOpen(false):setIsOpen(true)}}>Our Works</Link>
                <Link to='/about' onClick={() => {isOpen ? setIsOpen(false):setIsOpen(true)}}>About Us</Link>
                <Link to='/contact' onClick={() => {isOpen ? setIsOpen(false):setIsOpen(true)}}>Contact Us</Link>
            </div>
            <div className='navToggle' onClick={() => {isOpen ? setIsOpen(false):setIsOpen(true)}}>
                <svg width="114" height="64" viewBox="0 0 114 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="114" height="12" fill="white"/>
                    <rect y="52" width="114" height="12" fill="white"/>
                </svg>
            </div>
        </header>
    )
}

export default Header;