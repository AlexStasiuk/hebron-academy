import React from 'react';
import './map.css';
import Maps from './maps.png';
import Facebook from './facebook.png';
import Instagram from './instagram.png';
import Twitter from './twitter.png';
import In from './in.png';
import Youtube from './youtube.png';
import Place from './place.png';

export const Map = () => {
    return (
        <div className="mobile-map-content">
            <div className="mobile-map">
                <img src={Maps} alt="" />
                <div className="mobile-place">
                    <img src={Place} alt="" />
                    <span>HEBRON</span>
                </div>
            </div>
            <div className="mobile-search-block">
                <div className="mobile-text-e">
                    <span>КОНТАКТИ</span>
                    <span>Як нас знайти?</span>
                </div>
                <div className="mobile-contacts">
                    <span>Адреса:</span>
                    <span>79491, Львів-Брюховичі, вул. Бірківська, 11</span>
                    <span>E-mail:</span>
                    <span>itacademyfororphans@gmail.com</span>
                    <span>Телефон:</span>
                    <span>+380 50 750 2555 - Орест Яцкуляк</span>
                    <div className="mobile-soc-site">
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={In} alt="" />
                        <img src={Youtube} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
