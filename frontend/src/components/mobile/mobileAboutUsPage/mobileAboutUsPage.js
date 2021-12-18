import React from 'react';
import './mobileAboutUsPage.css';
import AboutUsImg1 from './aboutUsHeaderImg.png';

const MobileAboutUsPage = () => {
    return (
        <div className="mobile-page-about-us-page-wrapper">
            <div className="hebron-building-image-after-map-wrapper">
                <img src={AboutUsImg1} alt="HebronBuilding"></img>
            </div>
            <div className="mobile-page-about-us-header-wrapper">
                <span className="mobile-page-about-us-header-title">
                    ХЕВРОН
                </span>
                <span className="mobile-page-about-us-header-red-title">
                    ІТ АКАДЕМІЯ - ЦЕ:
                </span>
                <span className="mobile-page-about-us-header-text">
                    Неприбуткова організація, заснована у 2016 році подружжям
                    Ігоря Були та Лілії Валігун. Після успішного досвіду роботи
                    в сфері ІТ в Сполучених Штатах Америки, пара вирішила
                    допомагати соціально незахищеній молоді в Україні. Через
                    труднощі, пов'язані з роботою з молоддю соціально кризової
                    категорії, було визначено що цей проект є християнським. Це
                    сприяє не лише формуванню якісного освітнього середовища,
                    але також об'єднює студентів Хеврон ІТ Академії в здорову
                    активну спільноту, яка в подальшому вже дбає і допомагає
                    наступним студентам, які прийдуть після них.
                </span>
                <div className="mobile-page-about-us-header-red-block-wrapper">
                    <span>ПРО НАС</span>
                </div>
            </div>
            <div className="mobile-page-about-us-statut-block-wrapper">
                <span>СТАТУТ</span>
            </div>
        </div>
    );
};

export default MobileAboutUsPage;
