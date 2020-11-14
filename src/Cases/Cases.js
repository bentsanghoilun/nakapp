import {React, useEffect} from 'react';
import Logo from '../Logo/Logo';
import Case from './Case';

import './Cases.css';

function makeid(length) {
    var result           = '';
    var characters       = ' ABCDEFGHIJKLMNO PQRSTUVWXYZabcdefghijklmnop qrstuvwxyz012345 6789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

const Cases = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const tags = [
        "Stage",
        "Exhibition",
        "Fabrication",
        "Event/Show",
        "Roadshow",
        "Interior",
        "Mall Decoration"
    ];

    let CASES = [];
    const CASES_COUNT = Math.ceil(Math.random()*15)+15;
    for(var i = 0; i < CASES_COUNT; i++){
        const ww = Math.ceil(Math.random()*200)+600;
        const hh = Math.ceil(Math.random()*100)+400;
        let temptags = tags;
        const thistags = [];
        for(var j = 0; j <= Math.floor(Math.random()*1)+1; j++){
            var targ = Math.floor(Math.random()*temptags.length);
            thistags[j] = temptags[targ];
            //temptags.splice(targ);
        }
        CASES[i] = {
            title: makeid(Math.ceil(Math.random()*4)+8),
            image: 'https://picsum.photos/'+ww+'/'+hh+'?random='+i,
            tags: thistags,
        }
    };

    return(
        <section className="cases">
            <Logo />
            <h4>/Our Works</h4>
            <ul>
                {
                    CASES.map(CASE => (
                        <Case 
                            key={CASE.title}
                            title={CASE.title}
                            image={CASE.image}
                            tags={CASE.tags}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default Cases;