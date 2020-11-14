import {React, useEffect} from 'react';
import Logo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';
import './Contact.css';
import GoogleMapReact from 'google-map-react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';



const Contact = props => {
    const AnyReactComponent = ({ text }) => <div
        style={{
            padding: '12px',
            background: '#000',
            color: '#fff',
            fontSize: 'large'
        }}
    >{text}</div>;
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const gapik = 'AIzaSyCLi9urJePY1-Ks-NBibheb7q20og76U0w';
    const defaultProps = {
        center: {lat: 22.2860168, lng: 114.151326}, 
        zoom: 19
    }     

    return(
        <section className="neolist">
            <Logo />
            <h4>/Contact Us</h4>
            <ul>
                <li className='case'>
                    <Fade bottom>
                        <h2>Digitally</h2>
                        <br></br><br></br>
                        <div className=''>
                            <a href='tel:+85261947501'>Tel: +852 61947501</a><br></br>
                            <a href='mailto:wai.fan@nakconcept.com'>Email: wai.fan@nakconcept.com</a>
                        </div>
                    </Fade>
                </li>

                <li className='case'>
                    <Fade bottom>
                        <h2>Physically</h2>
                        <br></br><br></br>
                        
                        <div style={{ height: '300px', width: '100%' }}>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: gapik }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                            <AnyReactComponent
                                lat={22.2860348}
                                lng={114.1515838}
                                text="N A K"
                                style={{background:'none'}}
                            />
                            </GoogleMapReact>
                        </div>

                        <div className=''>
                            <a href='https://goo.gl/maps/yQFfpvUmqVeZtrqy8' target='_blank'>Room 501, 5/F, Bonham Centre<br/>79 Bonham Strand<br/>Sheung Wan<br/>HK</a>
                        </div>
                    </Fade>
                </li>

                <li className='case'>
                    <Fade bottom>
                        <h2>Socially</h2>
                        <br></br><br></br>
                        <div className=''>
                            <a href='/'><FaFacebookF/>: fan.k.wai</a>
                            <br></br>
                            <a href='/'><FaTwitter/>: #nakconcept</a>
                            <br></br>
                        </div>
                    </Fade>
                </li>
            </ul>
        </section>
    )
}

export default Contact;