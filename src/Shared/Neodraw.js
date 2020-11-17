import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';


import './Neodraw.css';

const Neodraw = props => {
    const [afterClicked, setafterClicked] = useState(false);

    useEffect(() => {
        props.isClicked && 
        setTimeout(() => {
            setafterClicked(true);
        }, 800)
    }, [props.isClicked])

    return(
        <div>
            <div className={`neodrawback${props.isClicked ? ' show':''}`} />
            <h2>{props.children}</h2>
            {
                afterClicked && 
                <Redirect to={'/cases/'+props.caseId} />
            }
        </div>
    )
}

export default Neodraw;