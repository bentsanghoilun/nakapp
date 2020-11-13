import React from 'react';

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
    let CASES = [];
    const CASES_COUNT = Math.ceil(Math.random()*15)+15;
    for(var i = 0; i < CASES_COUNT; i++){
        const ww = Math.ceil(Math.random()*200)+600;
        const hh = Math.ceil(Math.random()*100)+400;
        CASES[i] = {
            title: makeid(Math.ceil(Math.random()*12)+8),
            image: 'https://picsum.photos/'+ww+'/'+hh+'?random='+i,
        }
    };

    return(
        <section className="cases">
            <Logo />
            <ul>
                {
                    CASES.map(CASE => (
                        <Case 
                            key={CASE.title}
                            title={CASE.title}
                            image={CASE.image}
                        />
                    ))
                }
            </ul>
        </section>
    )
}

export default Cases;