import React from 'react';
import "./OutputSection.css"

const OutputSection = ({ res }) => {
    return (
        <div className='output-section'>
            <div className="op op-years">
                <div className='purple'>{res.years}</div>
                <div className='op-text'>years</div>
            </div>
            <div className="op op-months">
                <div className='purple'>{res.months}</div>
                <div className='op-text'>months</div>
            </div>
            <div className="op op-days">
                <div className='purple'>{res.days}</div>
                <div className='op-text'>days</div>
            </div>
        </div>
    );
}

export default OutputSection;
