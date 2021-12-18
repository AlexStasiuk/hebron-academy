import React from 'react';
import './donate.css';
import Photo from './photo/photo.png';
import Photo2 from './photo/photo2.png';
import Smile2 from './photo/smile2.png';
import { Skypapper } from './skypapper';
import { Map } from '../map/map';

export const Donate = () => {
    return (
        <div className="mobile-donate-content">
            <div className="mobile-donate-text">
                <span>ВИДИ</span>
                <span>ПОЖЕРТВ</span>
            </div>
            <div className="mobile-donate-block">
                <img src={Photo} alt="" />
                <div className="mobile-block-text-a">
                    <span>Громадська організація "Хеврон"</span>
                    <span>об’єднала вже багатьох однодумців,</span>
                    <span>ставши опорою для кризової молоді та</span>
                    <span>створила спільноту активних, цікавих</span>
                    <span>та соціально відповідальних людей!</span>
                </div>
                <div className="mobile-block-text-b">
                    <span>Допомагаючи Хеврон ІТ Академії ви не</span>
                    <span>лише створюєте новий соціум, в якому</span>
                    <span>кожен має право на якісну освіту та</span>
                    <span>надійну підтримку, а й отримуєте дещо взамін!</span>
                </div>
            </div>
            <div className="mobile-donate-img">
                <img src={Photo2} alt="" />
            </div>
            <Skypapper />
            <div className="mobile-donate-block-b">
                <p>ПРИЄДНУЙТЕСЬ</p>
                <span>Твоя історія успіху теж</span>
                <span>може бути тут!</span>
            </div>
            <div className="mobile-block-contact">
                <img src={Smile2} alt="" />
                <span>Залиште свої контакти</span>
                <span>і ми передзвонимо</span>
                <span>вам!</span>
                <label for="validationDefault01" className="mobile-form-label">
                    Ім’я:
                </label>
                <input className="mobile-form-control" />
                <label for="validationDefault01" className="mobile-form-label">
                    Номер телефону:
                </label>
                <input className="mobile-form-control" />
                <button className="mobile-button-send">Надіслати</button>
            </div>
            <Map />
        </div>
    );
};
