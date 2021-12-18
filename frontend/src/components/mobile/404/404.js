import React from 'react';
import './404.css';
import Photo from './photo.png';
import Photo2 from './photo2.png';

export const Error = () => {
    return (
        <div className="mobile-error-content">
            <div className="mobile-img-one">
                <img src={Photo2} alt="" />
            </div>
            <div className="mobile-error-center">
                <p>Помилка</p>
                <span>404</span>
                <p>Вибачте. такої сторінки не існує.</p>
                <p>або вона була видалена.</p>
                <button className="mobile-btn-home">На головну</button>
            </div>
            <div className="mobile-img-two">
                <img src={Photo} alt="" />
            </div>
        </div>
    );
};
