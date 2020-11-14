import {React, useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import './Image.css';


const Image = props => {
    const liTop = -Math.ceil(Math.random()*24)+'px';
    const liLeft = Math.ceil(Math.random()*48)-24+'px';
    const [isLoad, setIsLoad] = useState(false);
    //const ww = window.innerWidth;
    const wh = window.innerHeight;
    //const mb = ww < 600;
    var randomColor = require('randomcolor');

    return(
        <div
            style={{left: liLeft, top: liTop}}
        >
            {
                !isLoad && 
                <Skeleton 
                    style={{display: isLoad}}
                    // width={mb ? ((ww)-96) : (ww/2-96)}
                    height={wh/3}
                />
            }
            <img 
                className="thumb" 
                src={props.image} 
                onLoad={() => setIsLoad(true)}
                alt={props.title}
            />
            {
                props.tags &&
                <div className="tags">
                    <div style={{background: randomColor(),}}></div>
                    {
                        props.tags.map(tag => (
                            <span key={tag + (Math.random()*999)} >{tag}</span>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Image;