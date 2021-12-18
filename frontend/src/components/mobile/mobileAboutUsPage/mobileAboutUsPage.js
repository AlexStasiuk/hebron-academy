import React from 'react';
import './mobileAboutUsPage.css';
import AboutUsImg1 from './aboutUsHeaderImg.png';

import { ReactComponent as MissionLogo } from './Mission.svg';
import { ReactComponent as VisionLogo } from './Vision.svg';
import { ReactComponent as GoalLogo } from './Goal.svg';

import Person1Img from './Person1.png';
import Person2Img from './Person2.png';
import Person3Img from './Person3.png';

import MobileAboutUsPageStatutItems from '../mobileAboutUsPageStatutItems';
import MobileAboutUsIntroduceWithHebronCommand from '../mobileAboutUsIntroduceWithHebronCommand';

const MobileAboutUsPage = () => {
    const statutData = [
        {
            id: 1,
            title: 'МІСІЯ',
            text: 'Забезпечити молодь з групи ризику безкоштовним навчанням та практикою в галузі ІТ,  менторством, наставництвом, можливостями всебічного розвитку.',
            logo: <MissionLogo className="mobile-about-us-page-logo" />,
        },
        {
            id: 2,
            title: 'ЦІЛЬ',
            text: ' Допомогти соціально незахищеній молоді реалізуватися в суспільстві, шляхом виховання у них моральних цінностей та здобуття професійної кваліфікації в IT сфері, що допоможе їм у майбутньому.',
            logo: <GoalLogo className="mobile-about-us-page-logo" />,
        },
        {
            id: 3,
            title: 'БАЧЕННЯ',
            text: 'Бути центром інноваційної освіти для сиріт та молоді з групи ризику з наданням психологічної підтримки, побудованої на християнських цінностях.',
            logo: <VisionLogo className="mobile-about-us-page-logo" />,
        },
    ];
    const hebronCommandData = [
        {
            id: 1,
            name: 'Ігор Була',
            img: Person1Img,
            subtitle: 'Засновник та виконавчий директор.',
        },
        {
            id: 2,
            name: 'Орест Яцкуляк',
            img: Person2Img,
            subtitle: 'Заступник директора по навчально виховній роботі.',
        },
        {
            id: 3,
            name: 'Валентина Юсуфенко',
            img: Person3Img,
            subtitle: 'Заступниця директора з А-Г роботі.',
        },
    ];
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
            <MobileAboutUsPageStatutItems statutData={statutData} />
            <MobileAboutUsIntroduceWithHebronCommand
                hebronCommandData={hebronCommandData}
            />
        </div>
    );
};

export default MobileAboutUsPage;
