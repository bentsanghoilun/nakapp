import {React, useState, useEffect, useRef} from 'react';
import './Logo.css';
import { useSpring, animated, config } from 'react-spring';


const Logo = props => {
    const [state, toggle] = useState(true);
    const [stick, setStick] = useState(false);
    const ref = useRef(null);
    const { x } = useSpring({ from: { x: 0 }, delay: 500, x: state ? 1 : 0, config: config.wobbly });
    const { y } = useSpring({ from: { y: 0 }, delay: 800, y: state ? 1 : 0, config: config.molasses});
    const { a } = useSpring({ from: { a: 0 }, delay: 1000, a: state ? 1 : 0, config: config.gentle});
    const { z } = useSpring({ from: { z: 0 }, delay: 1200, z: state ? 1 : 0, config: config.slow });

    const handleScroll = () => {
        if (ref.current) {
            setStick(ref.current.getBoundingClientRect().top <= 0);
            console.log(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);
    

    return(
        <div className={`logo${stick ? ' stick': ''}`} ref={ref}>
            <animated.svg width="613" height="148" viewBox="0 0 613 148" fill="none" xmlns="http://www.w3.org/2000/svg"
                
            >
                <animated.path 
                    style={{
                        opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
                        transform: x.interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        }).interpolate(x => `scale(${x})`)
                    }}
                    d="M295.9 0.16098L249.547 147.946H265.407L277.957 108.022H324.203L336.752 147.946H352.613L306.26 0.16098H295.9ZM282.549 93.1574C291.841 63.6432 298.036 42.3394 301.08 29.1922C304.177 42.3394 310.372 63.6432 319.61 93.1574H282.549Z" fill="black"/>
                <animated.path 
                    style={{
                        opacity: y.interpolate({ range: [0, 1], output: [0, 1] }),
                        transform: y.interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        }).interpolate(y => `scale(${y})`)
                    }}
                    d="M74.2286 113.12L12.1756 0.214648H0V117.359H15.1661V34.6657L77.4861 148H89.3413V0H74.2286V113.12Z" fill="black"/>
                <animated.path 
                    style={{
                        opacity: a.interpolate({ range: [0, 1], output: [0, 1] }),
                        transform: a.interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        }).interpolate(a => `scale(${a})`)
                    }}
                    d="M15.1661 132.545H0V147.785H15.1661V132.545Z" fill="black"/>
                <animated.path 
                    style={{
                        opacity: z.interpolate({ range: [0, 1], output: [0, 1] }),
                        transform: z.interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        }).interpolate(z => `scale(${x})`)
                    }}
                    d="M562.696 61.6041L611.718 0.268304H592.173L535.3 71.4242V0.16098H520.134V147.946H535.3V95.6795L552.549 74.2146L595.484 148H613L562.696 61.6041Z" fill="black"/>
            </animated.svg>
        </div>
    )
}

export default Logo;