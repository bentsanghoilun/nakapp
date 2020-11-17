import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import StackGrid from "react-stack-grid";
import GalleryImage from './GalleryImage';

import './CaseDetails.css';

const CaseDetails = props => {
    const [isLoaded, setisLoaded] = useState(false);
    const [data, setdata] = useState();
    const id = useParams().id;
    console.log(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        const getCaseDetails = async () => {
            const response = await fetch('https://ben-tsang-node.herokuapp.com/nak/api/case/'+id);
            const responseData = await response.json();
            setdata(responseData.caseDetails);
            console.log(responseData);
            
            setisLoaded(true);
        }
        getCaseDetails();
    }, []);

    return(
        <section className='caseDetails' >
            <div className='details'>
                {
                    isLoaded && data &&
                    <Fade left cascade>
                        <div>
                            <h4>{data.tag}/</h4>
                            <br></br>
                            <h2 className='box'>{data.title}</h2>
                            <br></br>
                            <p>
                                Client: {data.client}
                                <br></br>
                                Venue: {data.venue}
                            </p>
                            <br></br>
                            <div className='caseNav'>
                                <Link to='/case'>A</Link>
                                <Link to='/case'>B</Link>
                            </div>
                        </div>
                    </Fade>
                }
            </div>
            <div className='gallery'>
                {
                    isLoaded && data &&
                        data.image.map(img =>(
                            <GalleryImage src={img.src} key={img.src} ww={img.width} hh={img.height} />
                        ))
                }
            </div>
        </section>
    )
}

export default CaseDetails;