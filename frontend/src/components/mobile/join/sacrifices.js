import React from 'react';
import './sacrifices.css';
import Photo5 from './photo/photo5.png';

export const Sacrifices = () => {
    return (
        <div className="mobile-sacrifices-content">
            <div className="mobile-sacrif">
                <img src={Photo5} alt="" />
                <button className="mobile-btn-open">
                    Відкрий філіал у своєму місті
                </button>
                <div className="mobile-sacrif-text">
                    <p>ДОПОМОГА</p>
                    <span>Необхідні потреби</span>
                    <span>Хеврону</span>
                </div>
            </div>
        </div>
    );
};
