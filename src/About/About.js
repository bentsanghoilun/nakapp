import {React, useEffect} from 'react';
import Logo from '../Logo/Logo';
import Fade from 'react-reveal/Fade';
import Image from '../Shared/Image';
import FrontImage from '../img/NAK-front.jpg';

import './About.css';

const About = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return(
        <section className="neolist">
            <Logo />
            <h4>/About Us</h4>
            <ul>
                <li className='case'>
                    <Fade bottom>
                        <h2>Hello!</h2>
                        <br></br><br></br>
                        <h4>We are glad to introduce ourselves as a professional, young and dynamic event, stage and exhibition design company.</h4>
                    </Fade>
                </li>

                <li className='case'>
                    <Fade bottom>
                        <Image image={FrontImage} tags={props.tags} />
                    </Fade>
                </li>


                <li className='case'>
                    <Fade bottom>
                        <p className='box' >Established in 2017, we provide seamless service to our clients, from design concepts to hardware production and decoration solutions for stage, event and exhibition, to corporate branding and marketing communications.</p>
                    </Fade>
                </li>

                <li className='case'>
                    <Fade bottom>
                        <h2>Founder & Director</h2>
                        <br></br><br></br>
                        <h4>FAN KWOK WAI</h4>
                        <div className=''>
                            <a href='tel:+85261947501'>T: +852 6194 7501</a><br></br>
                            <a href='mailto:nakconcept@gmail.com'>E: nakconcept@gmail.com</a>
                        </div>
                    </Fade>
                </li>
            </ul>
        </section>
    )
}

export default About;