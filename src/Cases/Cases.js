import {React, useEffect, useState} from 'react';
import Logo from '../Logo/Logo';
import Case from './Case';

import './Cases.css';

const Cases = props => {
    const [isLoaded, setisLoaded] = useState(false);
    const [loadedCases, setloadedCases] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        const getCases = async () => {
            const response = await fetch('https://ben-tsang-node.herokuapp.com/nak/api/case/');
            const responseData = await response.json();
            setloadedCases(responseData.cases);
            console.log(responseData);
            setisLoaded(true);
        }
        getCases();
    }, []);

    return(
        <section className="cases">
            <Logo />
            <h4>/Our Works</h4>
            <ul>
                {
                    isLoaded && loadedCases &&
                    loadedCases.map(loadedCase => (
                        <Case 
                            id={loadedCase.id}
                            key={loadedCase.title}
                            title={loadedCase.title}
                            image={loadedCase.image[0].src}
                            tag={loadedCase.tag}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default Cases;