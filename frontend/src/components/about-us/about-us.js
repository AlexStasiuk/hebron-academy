import React from 'react';

import './about-us.css';

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
        </div>
    );
}

export default AboutUs;