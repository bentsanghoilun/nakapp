import React from 'react';
import './SideTag.css';

const SideTag = () => {
    return(
        <p className='sidetag'><span style={{fontFamily:'sans-serif'}}>&#169;</span> {new Date().getFullYear()}. NAK Concept LTD.</p>
    )
}

export default SideTag;