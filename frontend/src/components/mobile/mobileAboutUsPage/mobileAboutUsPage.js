import React from 'react';
import './mobileAboutUsPage.css';
import AboutUsImg1 from './aboutUsHeaderImg.png';
import AboutUsImg2 from './Rectangle 744.png';

import { ReactComponent as MissionLogo } from './Mission.svg';
import { ReactComponent as VisionLogo } from './Vision.svg';
import { ReactComponent as GoalLogo } from './Goal.svg';

import Person1Img from './Person1.png';
import Person2Img from './Person2.png';
import Person3Img from './Person3.png';
import ReviewerPerson1 from './reviewerPhoto1.png';

import Gallery1Image from './gallery1.png';
import Gallery2Image from './gallery2.png';
import Gallery3Image from './gallery3.png';
import Gallery4Image from './gallery4.png';
import Gallery5Image from './gallery5.png';
import Gallery6Image from './gallery6.png';

import MobileAboutUsPageStatutItems from '../mobileAboutUsPageStatutItems';
import MobileAboutUsIntroduceWithHebronCommand from '../mobileAboutUsIntroduceWithHebronCommand';
import MobileAboutUsGallery from '../mobileAboutUsGallery';
import MobileAboutUsReviews from '../mobileAboutUsReviews';
import MobileAboutUsQuestions from '../mobileAboutUsQuestions';
import MobileGoogleMaps from '../mobileGoogleMaps';

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
    const gallaryData = [
        { id: 1, img: Gallery1Image },
        { id: 2, img: Gallery2Image },
        { id: 3, img: Gallery3Image },
        { id: 4, img: Gallery4Image },
        { id: 5, img: Gallery5Image },
        { id: 6, img: Gallery6Image },
        { id: 7, img: Gallery3Image },
        { id: 8, img: Gallery4Image },
        { id: 9, img: Gallery5Image },
    ];
    const dataForReviews = [
        {
            id: 1,
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            name: 'Ник Вуйчич',
            img: ReviewerPerson1,
        },
        { id: 2, quote: 'Lorem ididuiquipvolu', img: Person1Img, name: 'o' },
        {
            id: 3,
            quote: 'Lorem ididuiquipvolu33',
            img: Person2Img,
            name: 'o',
        },
        {
            id: 4,
            quote: 'Lorem ididuiquipvolu334',
            img: Person3Img,
            name: 'o',
        },
    ];
    const questionsData = [
        {
            id: 1,
            question: 'Хто може навчатись в Хеврон IT Академії?',
            answer: 'Особи із числа дітей-сиріт та дітей, позбавлених батьківського піклування; особи віком від 18 до 25 років, у яких у віці до 18 років померли або загинули батьки. Особи, які мають статус внутрішньо переміщених осіб, діти учасників АТО та молодь, яка опинилась у інших важких життєвих ситуаціях.',
            showAnswer: false,
        },
        {
            id: 2,
            question: 'Що таке Хеврон IT Академія?',
            answer: 'Особи із числа дітей-сиріт та дітей, позбавлених батьківського піклування; особи віком від 18 до 25 років, у яких у віці до 18 років померли або загинули батьки. Особи, які мають статус внутрішньо переміщених осіб, діти учасників АТО та молодь, яка опинилась у інших важких життєвих ситуаціях.',
            showAnswer: false,
        },
        {
            id: 3,
            question: 'Хто фінансує Академію?',
            answer: 'Особи із числа дітей-сиріт та дітей, позбавлених батьківського піклування; особи віком від 18 до 25 років, у яких у віці до 18 років померли або загинули батьки. Особи, які мають статус внутрішньо переміщених осіб, діти учасників АТО та молодь, яка опинилась у інших важких життєвих ситуаціях.',
            showAnswer: false,
        },
        {
            id: 4,
            question: 'Як долучитись до розвитку проекту?',
            answer: 'Особи із числа дітей-сиріт та дітей, позбавлених батьківського піклування; особи віком від 18 до 25 років, у яких у віці до 18 років померли або загинули батьки. Особи, які мають статус внутрішньо переміщених осіб, діти учасників АТО та молодь, яка опинилась у інших важких життєвих ситуаціях.',
            showAnswer: false,
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
            <MobileAboutUsGallery photos={gallaryData} />
            <MobileAboutUsReviews dataForReviews={dataForReviews} />
            <div className="about-us-page-video-block-wrapper">
                <div className="hebron-building-image-after-map-wrapper">
                    <img src={AboutUsImg2} alt="HebronBuilding"></img>
                </div>
            </div>
            <MobileAboutUsQuestions questionsData={questionsData} />
            <MobileGoogleMaps />
        </div>
    );
};

export default MobileAboutUsPage;
