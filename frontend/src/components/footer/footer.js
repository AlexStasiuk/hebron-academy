import React from 'react';

import './footer.css';
import Logo from './Hebron-Logo.png';
import Visa from './visa.png';
import MasterCard from './master-card.png';

const Footer = () =>{
    return(
        <div className='footer-wrapper'>
            <div className='main-content row no-gutters'>
                <div className='col-2'></div>
                <div className='col-2 logo'>
                    <img src={Logo} alt='logo'></img>
                </div>
                <div className='col-2 contact-info-wrapper'>
                    <div className='contact-info'>
                        <span className='font-weight-light light-text'>Пишіть нам на пошту або телефонуйте:</span>
                        <span className='font-weight-normal'>itacademyfororphans@gmail.com</span>
                        <span className='font-weight-normal'>+380975623220</span>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-3 credentials'>
                    <div className='text'>
                        <span className='first-block'>Оплата картою:</span>
                        <span>VISA / Mastercard</span>
                    </div>
                    <div className='images-block'>
                        <img src={Visa} alt='visa'></img>
                        <img src={MasterCard} alt='masterCard'></img>
                    </div>
                    <div>
                        <button className='support-button'>Підтримати</button>
                    </div>
                </div>
                <div className='col-2'></div>

            </div>
            <div className='copyright-footer row no-gutters'>
                <span>© 2021 Hebron. All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;