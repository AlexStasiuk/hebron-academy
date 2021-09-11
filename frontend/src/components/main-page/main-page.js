import React from 'react';

import './main-page.css';
import {ReactComponent as MissionLogo} from './Mission.svg';
import {ReactComponent as VisionLogo} from './vision.svg';
import {ReactComponent as ContactsLogo} from './contacts.svg';
import {ReactComponent as CredentialsLogo} from './credentials.svg';
import {ReactComponent as UkraineHebronMap} from './Habron design (1).svg';

import HebronInfoImageRight from '../hebron-info-image-right';
import HebronInfoImageLeft from '../hebron-info-image-left';

import HebronHeaderImage from './Hebron-Header.png';
import OurGraduatesImage from './OurGraduates.png';
import EducationImage from './education.png';
import PosibilitiesImage from './Posibilities.png';
import CommandImage from './Command.png';

const OurGraduatesText = <div><span>В перспективі стають не лише кваліфікованими спеціалістами в галузі IT, а й</span> <b>СВІДОМИМИ</b> <span>та</span> <b>АКТИВНИМИ</b> <span>громадянами сучасного суспільства</span></div>;
const EducationText = <div><span> 5 років тому ми задумались, яким чином можна допомогти кризовій молоді, в якої є потенціал, але немає можливості успішно самореалізуватись у суспільстві, через брак коштів та моральної підтримки. І зрозуміли, що найкраща допомога - це </span><b>ОСВІТА</b></div>;
const PosibilitiesText = <div><span>- це молоді люди з числа сиріт та випускників інтернатів, внутрішньо переміщені особи, діти учасників воїнів АТО,  а також та молодь, яка опинилася у складних життєвих обставинах. Це хлопці та дівчата, які можуть та хочуть працювати, розвиватися та приносити користь суспільству. Все, що їм потрібно, це  дати</span> <b>МОЖЛИВІСТЬ</b></div>;
const CommandText = <div>Хеврон ІТ Академія - це спільнота  людей,  яким важлива доля соціально незахищеної молоді в Україні. Ми об’єднуємо довкола себе меценатів, жертводавців, волонтерів, менторів та просто небайдужих людей! </div>

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
            <HebronInfoImageRight 
                img={EducationImage} 
                title='Початок великої місії' 
                text={EducationText} 
                redTitle='ОСВІТА'/>
            <HebronInfoImageLeft 
                img={PosibilitiesImage}
                redTitle='МОЖЛИВІСТЬ'
                title='Студенти Хеврон IT Академії'
                text={PosibilitiesText}
                />
            <div className='Ukraine-map-wrapper row no-gutters'>
                <div className='col-12 Ukraine-map-middleblock'>
                    <UkraineHebronMap className=' Ukraine-map'/>
                </div>
            </div>
            <HebronInfoImageRight 
                img={OurGraduatesImage} 
                title='Наші випускники' 
                text={OurGraduatesText} 
                redTitle='МАЙБУТНЄ'/>
            <HebronInfoImageLeft 
                img={CommandImage}
                redTitle='КОМАНДА'
                title='Приєднуйтесь до нас!'
                text={CommandText}
                />
        </div>
    );
}
export default MainPage;