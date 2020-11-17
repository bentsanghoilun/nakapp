import React, {useState} from 'react';
import './GalleryImage.css';


const GalleryImage = props => {
    const [isLoad, setIsLoad] = useState(0);
    const offset = 72;
    return(
        <img 
            src={props.src}
            alt={props.src}
            onLoad={() => setIsLoad(1)}
            style={{
                width: window.innerWidth/2,
                height: props.hh*(window.innerWidth/2/props.ww),
                top: (Math.random()*offset)-(offset/2)+'px',
                left: (Math.random()*offset)-(offset/2)+'px',
            }}
            className='gallery-image'
            loaded={isLoad}
        />
    )
}

export default GalleryImage;