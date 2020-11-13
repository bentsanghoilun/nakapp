import {React, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import './Image.css';


const Image = props => {
    const liTop = -Math.ceil(Math.random()*24)+'px';
    const liLeft = Math.ceil(Math.random()*48)-24+'px';
    const [isLoad, setIsLoad] = useState(false);

    return(
        <div>
            {
                !isLoad && 
                <Skeleton 
                    style={{display: isLoad[0]}}
                    width={500}
                    height={300}
                />
            }
            <img 
                className="thumb" 
                src={props.image} 
                style={{left: liLeft, top: liTop}} 
                onLoad={() => setIsLoad(true)}
                alt={props.title}
            />
        </div>
    )
}

export default Image;