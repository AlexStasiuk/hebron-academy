import React from 'react';

import './about-us.css';

import HebronCommandInAboutUsPage from '../hebron-command-in-about-us-page';
import FQAInAboutUs from '../FQA-in-about-us';
import PhotoGalleryInAboutPage from '../photo-gallery-in-about-us-page';

import {ReactComponent as MissionLogo} from './Місія.svg';
import {ReactComponent as VisionLogo} from './Бачення.svg';
import {ReactComponent as GoalLogo} from './Ціль.svg';

import Person1Image from './Person1.png';
import Person2Image from './Person2.png';
import Person3Image from './Person3.png';
import Gallery1Image from './gallery1.png';
import Gallery2Image from './gallery2.png';
import Gallery3Image from './gallery3.png';
import Gallery4Image from './gallery4.png';
import Gallery5Image from './gallery5.png';
import Gallery6Image from './gallery6.png';


import AboutUsHeaderImage from './about-us-header-img.png';
const hebronCommand = [
    {id:1, name: 'Ігор Була', position: 'Засновник та виконавчий директор.', img: Person1Image},
    {id:2, name: 'Орест Яцкуляк', position: 'Заступник директора по навчально виховній роботі.', img: Person2Image},
    {id:3, name: 'Валентина Юсуфенко', position: 'Заступниця директора з А-Г роботі', img: Person3Image},
    {id:4, name: 'test', position: 'test', img: Person2Image}
];
const gallaryData = [
    {id: 1, img: Gallery1Image},
    {id: 2, img: Gallery2Image},
    {id: 3, img: Gallery3Image},
    {id: 4, img: Gallery4Image},
    {id: 5, img: Gallery5Image},
    {id: 6, img: Gallery6Image},
    {id: 7, img: Gallery3Image},
    {id: 8, img: Gallery4Image},
    {id: 9, img: Gallery5Image},
]
const fqaData = [
    {id: 1, question: 'Що таке Хеврон IT Академія?', answer: 'jfjf'},
    {id: 2, question: 'Хто може навчатись в Хеврон IT Академії?', answer: 'Особи із числа дітей-сиріт та дітей, позбавлених батьківського піклування; особи віком від 18 до 25 років, у яких у віці до 18 років померли або загинули батьки. Особи, які мають статус внутрішньо переміщених осіб, діти учасників АТО та молодь, яка опинилась у інших важких життєвих ситуаціях.'},
    {id: 3, question: 'Хто фінансує Академію?', answer: 'jfjf'},
    {id: 4, question: 'Що таке Хеврон IT Академія?', answer: 'jfjf'},
    {id: 5, question: 'Що таке Хеврон IT Академія?', answer: 'jfjf'},
    {id: 6, question: 'Як долучитись до розвитку проекту?', answer: 'jfjf'}
];
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
            <HebronCommandInAboutUsPage data={hebronCommand}/>
            <PhotoGalleryInAboutPage data={gallaryData}/>
            <FQAInAboutUs data={fqaData}/>
        </div>
    );
}

export default AboutUs;