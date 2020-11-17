import {React, useState} from 'react';
import Fade from 'react-reveal/Fade';
import Image from '../Shared/Image';
import Neodraw from '../Shared/Neodraw';

import './Case.css'; 

const Case = props => { 
    const [isClicked, setisClicked] = useState(false);
    return(
        <li style={{minHeight: window.innerHeight/2}} className="case" onClick={() => {setisClicked(true)}}>
            <Fade bottom>
                <Neodraw isClicked={isClicked} style={{zIndex:"999"}} caseId={props.id}>{props.title}</Neodraw>
                <Image image={props.image} tag={props.tag} />
            </Fade>
        </li>
    )
}

export default Case;