import React, {useState} from 'react';
import './GalleryImg.css';


const GalleryImg = props => {
    const [isLoad, setIsLoad] = useState(0);
    const offset = 72;
    return(
        <img 
            src={props.src}
            alt={props.src}
            onLoad={() => setIsLoad(1)}
            style={{
                width: window.innerWidth <= 600 ? window.innerWidth : window.innerWidth/2,
                height: window.innerWidth <= 600 ? props.hh*(window.innerWidth/props.ww) : props.hh*(window.innerWidth/2/props.ww),
                top: (Math.random()*offset)-(offset/2)+'px',
                left: (Math.random()*offset)-(offset/2)+'px',
            }}
            className='gallery-image'
            loaded={isLoad}
        />
    )
}

export default GalleryImg;