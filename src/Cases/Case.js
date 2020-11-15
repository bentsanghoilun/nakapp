import {React} from 'react';
import Fade from 'react-reveal/Fade';
import Image from '../Shared/Image';

import './Case.css'; 

const Case = props => { 
    return(
        <li style={{minHeight: window.innerHeight/2}} className="case">
            <Fade bottom>
                <h2>{props.title}</h2>
                <Image image={props.image} tag={props.tag} />
            </Fade>
        </li>
    )
}

export default Case;