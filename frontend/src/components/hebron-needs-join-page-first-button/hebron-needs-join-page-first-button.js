import React from 'react';

import './hebron-needs-join-page-first-button.css';
import VisaImage from './visa.png';
import MasterCardImage from './masterCard.png';

const HebronNeedsJoinPageFirstButton = () =>{
    return(
        <form className='credentials-input-wrapper'
        >
            <span>Мій внесок:</span>
            <select
            name='amountOfCharityTransaction'>
                <option value='100'>100 грн</option>
                <option value='200'>200 грн</option>
                <option value='500'>500 грн</option>
            </select>
            <div>
                <span>*</span>
                <span>Призначення:</span>
            </div>
            <input name='destination' type='text'></input>
            <div>
                <div>
                    <span>Регулярне списання</span>
                    <input type='checkbox' name='isRegular'></input>
                </div>
                <div>
                    <span>
                    Спосіб повторення:
                    </span>
                    <select name='frequensy'>
                        <option value='1'>Щомісяця</option>
                        <option value='1'>Щодня</option>
                        <option value='1'>Щороку</option>
                    </select>
                </div>
            </div>
            <span>
            ПІП:
            </span>
            <input name='pib' type='text'>

            </input>
            <span>
            Email:
            </span>
            <input name='email' type='email'></input>
            <div>
                <img src={VisaImage} alt=''/>
                <img src={MasterCardImage} alt=''/>
                <input 
                    type="submit" 
                    value="Надіслати"/>

            </div>
            <div className='credentials-text-block-wrapper'>
                <span>Реквізити</span>
                <hr/>
                <span>IBAN: <b>UA973253210000026002053717183</b> в ЗГРУ ПАТ КБ «ПриватБанку» м.Львів</span>
                <hr/>
                <div className='credentials-contact-info-wrapper'>
                    <span>Адреса:  <b>79491, Львів-Брюховичі, вул. Бірківська, 11</b></span>
                    <span>E-mail:  <b>itacademyfororphans@gmail.com</b></span>
                    <span>Skype:  <b>ITacademyfororphans</b></span>

                </div>
                <span>
                    Телефон:  <b>+38 050 750 2555 - Орест Яцкуляк, заступник директора по навчально-виховній роботі</b>
                </span>
            </div>
        </form>
    )
}

export default HebronNeedsJoinPageFirstButton;