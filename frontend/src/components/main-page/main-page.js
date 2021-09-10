import React from 'react';

import './main-page.css';
import {ReactComponent as MissionLogo} from './Mission.svg';
import {ReactComponent as VisionLogo} from './vision.svg';
import {ReactComponent as ContactsLogo} from './contacts.svg';
import {ReactComponent as CredentialsLogo} from './credentials.svg';

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
                        
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>LinkedIn</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Instagram</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Facebook</div>
                        </div>
                        <div className='link'>
                            <div className='link-square'></div>
                            <div>Youtube</div>
                        </div>

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
            <div className='empty-block-1 row no-gutters'>
                <div className='col-12'></div>
            </div>

            <div className='second-block-wrapper row no-gutters'>
                <div className='col-1'></div>
                <div className='col-10 main-header-block-wrapper'>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>01</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>МІСІЯ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <MissionLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>


                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>02</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>БАЧЕННЯ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <VisionLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>Бути центром інноваційної освіти для сиріт та молоді з групи ризику, побудованої на християнських принципах.</div>
                    </div>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>03</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>РЕКВІЗИТИ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <CredentialsLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>
                    <div className='main-header-block'>
                        <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>04</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>КОНТАКТИ</div>
                        </div>
                            
                        <div className='header-logo'>
                            <ContactsLogo className='header-logo-svg'/>

                        </div>
                        <div className='header-text'>788888588</div>
                    </div>

                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}
export default MainPage;