import React from 'react';
import Laptop from'./laptop.png';
import Donation from './donations.png';
import './donations.css';
import Paint from './paint.png';
import iPhone from './iphone.png';
import { Maps } from '../map/map';
import { Skypapper } from './skypapper';


const Donations = () => {

    return(
    <div className='donation'>
        <div className='laptop'>
            <img src={Laptop} alt=''/>
            <div className='text'>
                <img src={Donation} alt=''/>
                <div className='text-a'>
                    <div className='li-a'/>
                        <p>Громадська організація "Хеврон" об’єднала вже </p>
                        <p>багатьох однодумців, ставши опорою для</p>
                        <p>кризової молоді та створила спільноту активних,</p>
                        <p>цікавих та соціально відповідальних людей!</p>
                 </div>
                <div className='text-b'>
                    <div className='li-b'/>
                        <p>Допомагаючи Хеврон ІТ Академії ви не лише</p> 
                        <p>створюєте новий соціум, в якому кожен має</p>
                        <p>право на якісну освіту та надійну підтримку, а й</p> 
                        <p>отримуєте дещо взамін!</p>
                    </div>
            </div>
        </div>
        <div>
            <img src={Paint} alt=''/>
        </div>
        <Skypapper/>
        <div className='contacts'>
            <div className='data'>
                <h4>ПРИЄДНУЙТЕСЬ</h4>
                <h2>Залиште свої контакти і ми</h2>
                <h2>передзвонимо вам!</h2>
                    <label for="validationDefault01" className="form-label">ПІБ:</label>
                    <input className='form-control'/>
                    <label for="validationDefault02" className="form-label">Номер телефону:</label>
                    <input className='form-control'/>
                <button className='btn-send'>Надіслати</button>
            </div>
            <img src={iPhone} alt=''/>
        </div>  
        <Maps/>
    </div>
    )
}

export default Donations;