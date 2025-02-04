import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import GalleryImg from './GalleryImg';
import Slider from "react-slick";

import './CaseDetails.css';

const CaseDetails = props => {
    const [isLoaded, setisLoaded] = useState(false);
    const [onChange, setonChange] = useState(false);
    const [data, setdata] = useState();
    const [caseTotal, setcaseTotal] = useState(0);
    const id = useParams().id;
    console.log(id);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //centerMode: true,
        adaptiveHeight: true
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const getCaseDetails = async () => {
            const response = await fetch('https://ben-tsang-node.herokuapp.com/nak/api/case/'+id);
            const responseData = await response.json();
            setdata(responseData.caseDetails);
            setcaseTotal(responseData.caseTotal);
            console.log(responseData);
            
            setisLoaded(true);
            setonChange(false);
        }
        getCaseDetails();
    }, [id]);

    const total = 0;

    return(
        <section className='caseDetails' >
            <div className='mbGallery'>
            {
                isLoaded && data &&
                <Slider {...settings} >
                {
                    data.img.map((img, index) => (
                    <GalleryImg src={img.src} key={img.src} ww={img.width} hh={img.height} index={index+1} total={data.img.length} />
                ))}
                </Slider>
            }
            </div>
            <div className='details'>
                {
                    isLoaded && data &&
                    <Fade left cascade>
                        <div>
                            <h4>{data.tag}/</h4>
                            <br></br>
                            <h2 className='box'>{data.client}</h2>
                            <br></br>
                            <p>Event: {data.title}</p>
                            <p>Venue: {data.venue}</p>
                            <br></br>
                            <div className='caseNav'>
                                {
                                    data.key-1 >= 0 &&
                                    <Link to={'/cases/case'+(data.key-1)} onClick={() => setonChange(true)}>
                                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.452271" y="8.60371" width="11.5279" height="1.21346" transform="rotate(-45 0.452271 8.60371)" fill="black"/>
                                            <rect x="1.3103" y="7.78842" width="11.5279" height="1.21346" transform="rotate(45 1.3103 7.78842)" fill="black"/>
                                        </svg>
                                    </Link>
                                }
                                {
                                    data.key+1 < caseTotal &&
                                    <Link to={'/cases/case'+(data.key+1)} onClick={() => setonChange(true)}>
                                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="10" y="8.64647" width="11.5279" height="1.21346" transform="rotate(135 10 8.64647)" fill="black"/>
                                            <rect x="9.14197" y="9.46176" width="11.5279" height="1.21346" transform="rotate(-135 9.14197 9.46176)" fill="black"/>
                                        </svg>
                                    </Link>
                                }
                            </div>
                        </div>
                    </Fade>
                }
            </div>
            <div className='gallery'>
                {
                    isLoaded && data &&
                        data.img.map((img, index) =>(
                            <GalleryImg src={img.src} key={img.src} ww={img.width} hh={img.height} index={index+1} total={data.img.length} />
                        ))
                }
            </div>
        </section>
    )
}

export default CaseDetails;