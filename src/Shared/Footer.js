import React from 'react';
import './Footer.css';

const Footer = props => {
    const year = new Date().getFullYear();

    return(
        <div className='footer'>
            <p>DESIGNED by <a href='https://www.tsanghoilun.com' target="_blank">BEN.TSANGHOILUN</a></p>
        </div>
    )
}

export default Footer;