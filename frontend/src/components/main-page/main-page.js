import React from 'react';

import './main-page.css';
import HebronHeaderImage from './Hebron-Header.png';

const MainPage = () =>{
    return (
        <div className = 'main-page-wrapper'>

            <div className='first-block-wrapper row no-gutters'>
                <div className='col-2'></div>
                <div className='col-10 second-col'>
                    <img src={HebronHeaderImage} alt='' className='hebron-header-image'></img>
                </div>
                <div className='col-2 second-block'>                    
                    <div className='orange-rectangle'>
                    </div>
                    <div className='change-life-together-text-div'>
                        <span>ЗМІНЮЄМО</span>
                        <span>ЖИТТЯ</span>
                        <span>РАЗОМ</span>

                    </div>
                </div>
                <div className='col-10 third-block'>
                    <div className='links'>
                        <span>LinkedIn</span>
                        <span>Instagram</span>
                        <span>Facebook</span>
                        <span>Youtube</span>
                    </div>
                    <div className='some-text'>
                        <span>Український центр</span>
                        <span>IT технологій</span>
                        <span>для соціально</span>
                        <span>незахищеної молоді</span>
                    </div>
                    <div className='some-button'>
                        <button className='button-text'>
                            <span>Отримай </span>
                            <span>Взамін від</span>
                            <span><strong>Хеврону</strong> </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='second-block-wrapper row no-gutters'>
                f
            </div>
        </div>
    );
}
export default MainPage;