import React from 'react';
import './join.css';
import Photo from './photo/photo.png';
import Photo2 from './photo/photo2.png';
import Photo3 from './photo/photo3.png';
import Photo4 from './photo/photo4.png';
import { Sacrifices } from './sacrifices';
import { Map } from '../map/map';

export const Join = () => {
    return (
        <div className="mobile-join-content">
            <div className="mobile-join">
                <span>ПРИЄДНАТИСЬ</span>
            </div>
            <div className="mobile-join-text">
                <img src={Photo} alt="" />
                <span>Як приєднатися до</span>
                <h1>Хеврон ІТ Академії?</h1>
                <div className="mobile-text-p">
                    <p>Хеврон ІТ Академія існує завдяки</p>
                    <p>добровільним пожертвам небайдужих</p>
                    <p>людей. Завдяки залученим коштам</p>
                    <p>студенти забезпечені харчуванням,</p>
                    <p>житлом, медичною підтримкою протягом</p>
                    <p>2-х навчальних років. Також розробляємо</p>
                    <p>навчальні програми, надаємо соціальний</p>
                    <p>супровід, менторську та психологічну</p>
                    <p>підтримку.</p>
                </div>
            </div>
            <div className="mobile-join-text">
                <img src={Photo2} alt="" />
                <span>Кожен внесок є цінним</span>
                <div className="mobile-text-p">
                    <p>Хеврон ІТ Академія існує завдяки</p>
                    <p>добровільним пожертвам небайдужих</p>
                    <p>людей. Завдяки залученим коштам</p>
                    <p>студенти забезпечені харчуванням,</p>
                    <p>житлом, медичною підтримкою протягом</p>
                    <p>2-х навчальних років. Також розробляємо</p>
                    <p>навчальні програми, надаємо соціальний</p>
                    <p>супровід, менторську та психологічну</p>
                    <p>підтримку.</p>
                </div>
            </div>
            <Sacrifices />
            <div className="mobile-join-text">
                <img src={Photo3} alt="" />
                <span>На що ми збираємо зараз?</span>
                <div className="mobile-text-p">
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p>adipiscing elit, sed do eiusmod tempor</p>
                    <p>incididunt ut labore et dolore magna aliqua. Ut</p>
                    <p>enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    <p>commodo consequat. Duis aute irure dolor in</p>
                    <p>reprehenderit in voluptate velit esse cillum</p>
                    <p>dolore eu fugiat nulla pariatur.</p>
                </div>
                <button className="mobile-btn-help">Допомогти</button>
            </div>
            <div className="mobile-join-text">
                <img src={Photo4} alt="" />
                <span>На що ми збираємо зараз?</span>
                <div className="mobile-text-p">
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <p>adipiscing elit, sed do eiusmod tempor</p>
                    <p>incididunt ut labore et dolore magna aliqua. Ut</p>
                    <p>enim ad minim veniam, quis nostrud</p>
                    <p>exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    <p>commodo consequat. Duis aute irure dolor in</p>
                    <p>reprehenderit in voluptate velit esse cillum</p>
                    <p>dolore eu fugiat nulla pariatur.</p>
                </div>
                <button className="mobile-btn-help">Допомогти</button>
            </div>
            <Map />
        </div>
    );
};
