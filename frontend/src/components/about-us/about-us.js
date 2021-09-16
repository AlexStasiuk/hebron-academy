import React from 'react';

import './about-us.css';
import {ReactComponent as MissionLogo} from './Місія.svg';
import {ReactComponent as VisionLogo} from './Бачення.svg';
import {ReactComponent as GoalLogo} from './Ціль.svg';

import AboutUsHeaderImage from './about-us-header-img.png';
const AboutUs = () =>{
    return(
        <div className='about-us-wrapper'>
            <div className='first-block-wrapper row no-gutters'>
                <div className='col-1'></div>
                <div className='col-3'>
                </div>
                <div className='col-8 about-us-head-img'>
                    <img src={AboutUsHeaderImage} alt=''></img>
                </div>

                <div className='header-info-wrapper'>
                    <div className='orange-block-header'>
                    </div>
                    <div className='empty-block-in-header'></div>
                    <br/>
                    <div className='hebron-black-header-title'>ХЕВРОН</div>
                    <div className='hebron-red-header-title'>IT АКАДЕМІЯ - ЦЕ:</div>
                    <br/>
                    <div className='hebron-maininfo-header'>
                        неприбуткова організація, заснована у 2016 році подружжям Ігоря Були та Лілії Валігун. Після успішного досвіду роботи в сфері ІТ в Сполучених Штатах Америки, пара вирішила допомагати соціально незахищеній молоді в Україні. Через труднощі, пов'язані з роботою з молоддю соціально кризової категорії, було визначено що цей проект є християнським. Це сприяє не лише формуванню якісного освітнього середовища, але також об'єднює студентів Хеврон ІТ Академії в здорову активну спільноту, яка в подальшому вже дбає і допомагає наступним студентам, які прийдуть після них.
                    </div>
                    
                </div>
                <span className='about-us-header-title'>ПРО НАС</span>

            </div>
            <div className='second-block-wrapper row no-gutters'>
                <div className='grey-subblock col-12'></div>
                <div className='second-block-info-wrapper col-12'>
                    <div className='empty-space-in-second-info-block'></div>
                    <div className='statut'>СТАТУТ</div>
                    <div className='statut-item-wrapper'>
                        <div className='statut-item'>
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
                    </div>
                    <div className='statut-item-wrapper'>
                        <div className='statut-item'>
                            <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>02</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>ЦІЛЬ</div>
                            </div>
                                
                            <div className='header-logo'>
                                <GoalLogo className='header-logo-svg'/>
                            </div>

                            <div className='header-text'>
                            Допомогти соціально незахищеній молоді реалізуватися в суспільстві, шляхом виховання у них моральних цінностей та здобуття професійної кваліфікації в IT сфері, що допоможе їм у майбутньому.
                            </div>
                        </div>
                    </div>
                    <div className='statut-item-wrapper'>
                        <div className='statut-item'>
                            <div className='number-and-title'>
                            <div className='header-number-wrapper'>
                                <div className='number'>03</div>
                                <div className='header-rectangle'></div>
                            </div>
                            <div className='header-title'>БАЧЕННЯ</div>
                            </div>
                                
                            <div className='header-logo'>
                                <VisionLogo className='header-logo-svg'/>
                            </div>
                            <div className='header-text'>788888588</div>
                        </div>
                    </div>
                    <div className='empty-space-in-second-info-block'></div>
                </div>
            </div>
            <div className='third-block-wrapper row no-gutters'>
                <div className='col-2'></div>
                <div className='col-4 third-block-large-text'>
                    <span>Знайомтесь з</span>
                    <span>командою Хеврону:</span>
                </div>
                <div className='col-4 third-block-smaller-text'>
                   <span> 
                       Хеврон ІТ Академія – це команда однодумців, професіоналів та небайдужих людей. Нам подобається те, що робимо, тому робимо це якісно. Ми відкриті,  любимо технології, і використовуємо їх щоб розширювати межі та втілювати найсміливіші ідеї. 
                   </span>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default AboutUs;