import React from 'react';
import './PaymentMenu.css';
import PaymentImg from './img/PaymentImg.png';
import PaymentImg2 from './img/PaymentImg2.png';
import HebronNeedsJoinPageFirstButton from '../../hebron-needs-join-page-first-button/hebron-needs-join-page-first-button';

export default function PaymentMenu(props) {
    return (
        <div className="Payment">
            <div className="Payment-about">
                <div className="Payment-about__title">
                    ДОЛУЧИТИСЬ <br /> ДО <span>ХЕВРОН 100</span>
                </div>
                <div className="Payment-about__description">
                    Станьте Благодійником Хеврону вже сьогодні! На сторінці
                    оплати натисніть функцію "Регулярне списання", оберіть
                    спосіб повторення "щомісяця" та введіть реквізити.
                </div>
            </div>
            <div className="Payment-requisites">
                <HebronNeedsJoinPageFirstButton />
            </div>
            <div className="Payment-images">
                {props.time % 2 === 0 ? (
                    <img
                        src={PaymentImg}
                        alt="PaymentPhoto"
                        className="Payment-image"
                    />
                ) : (
                    <img src={PaymentImg2} className="Payment-image2" alt="" />
                )}
            </div>
        </div>
    );
}
