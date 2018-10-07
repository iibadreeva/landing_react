import React from 'react';
import Descriptions from './Descriptions'
import Discount from './Discount'

const HighLights = () => {
    return(
        <div className="highlight_wrapper">
            <Descriptions />
            <Discount />
        </div>
    );
};

export default HighLights;