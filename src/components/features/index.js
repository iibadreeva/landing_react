import React from 'react';
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'

const Features = () => {
    return(
        <div style={{position:'relative'}}>
            <Carrousel />

            <div className="artist_name">
                <div className="wrapper">
                    Arina Grande1
                </div>
            </div>

            <TimeUntil />
        </div>
    );
};

export default Features;