import React, { useEffect, useState } from 'react';

import './about-us.css';

import HebronCommandInAboutUsPage from '../hebron-command-in-about-us-page';
import FQAInAboutUs from '../FQA-in-about-us';
import PhotoGalleryInAboutPage from '../photo-gallery-in-about-us-page';

import { ReactComponent as MissionLogo } from './Mission.svg';
import { ReactComponent as VisionLogo } from './Vision.svg';
import { ReactComponent as GoalLogo } from './Goal.svg';

import Person1Image from './Person1.png';
import Person2Image from './Person2.png';
import Person3Image from './Person3.png';
import ReviewerPerson1 from './reviewerPhoto1.png';

import AboutUsHeaderImage from './about-us-header-img.png';
import PopUpPhotoGalleryInAboutUs from '../pop-up-photo-gallery-in-about-us';
import ReviewsForAboutUs from '../reviews-for-about-us';
import VideoBlock from '../video-block-about-us';
const hebronCommand = [
    {
        id: 1,
        name: 'Ігор Була',
        position: 'Засновник та виконавчий директор.',
        img: Person1Image,
    },
    {
        id: 2,
        name: 'Орест Яцкуляк',
        position: 'Заступник директора по навчально виховній роботі.',
        img: Person2Image,
    },
    {
        id: 3,
        name: 'Валентина Юсуфенко',
        position: 'Заступниця директора з А-Г роботі',
        img: Person3Image,
    },
    { id: 4, name: 'test', position: 'test', img: Person2Image },
];

const dataForReviews = [
    {
        id: 1,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        name: 'Ник Вуйчич',
        img: ReviewerPerson1,
    },
    { id: 2, quote: 'Lorem ididuiquipvolu', img: Person1Image, name: 'o' },
    { id: 3, quote: 'Lorem ididuiquipvolu33', img: Person1Image, name: 'o' },
    { id: 4, quote: 'Lorem ididuiquipvolu334', img: Person1Image, name: 'o' },
];

const AboutUs = () => {
    const [popUpGallery, setPopUpGallery] = useState(false);
    const [idForPopUpGallery, setIdForPopUpGalery] = useState(0);
    const [faqItems, setFaqItems] = useState(null);
    const [galleryItems, setGalleryItems] = useState(null);

    const itemImageClicked = (id) => {
        console.log('about us: itemimage clicked', id);
        setPopUpGallery(true);
        setIdForPopUpGalery(id);
    };
    const closePopUpClicked = () => {
        setPopUpGallery((value) => !value);
    };
    const isPopUp =
        popUpGallery && galleryItems !== null ? (
            <PopUpPhotoGalleryInAboutUs
                images={galleryItems}
                itemClickedId={idForPopUpGallery}
                onClick={closePopUpClicked}
            />
        ) : null;

    useEffect(() => {
        async function fetchMyFAQ() {
            fetch('http://localhost:8000/about-us-fqa/')
                .then((response) => response.json())
                .then((data) => {
                    const preparedData = data.map((item, index) => {
                        const id = index + 1;
                        return { id, ...item };
                    });
                    const newFaq = [...preparedData];
                    setFaqItems(newFaq);
                });
        }
        async function fetchMyGallery() {
            fetch('http://localhost:8000/about-us-gallery/')
                .then((response) => response.json())
                .then((data) => {
                    const preparedData = data.map((item, index) => {
                        const id = index + 1;
                        return { id, ...item };
                    });
                    const newGallery = [...preparedData];
                    console.log(newGallery);
                    setGalleryItems(newGallery);
                });
        }
        fetchMyGallery();
        fetchMyFAQ();
    }, []);
    const renderedFAQs =
        faqItems !== null ? <FQAInAboutUs data={faqItems} /> : null;
    const renderedGallery =
        galleryItems !== null ? (
            <PhotoGalleryInAboutPage
                data={galleryItems}
                itemImageClicked={itemImageClicked}
            />
        ) : null;
    return (
        <div className="about-us-wrapper">
            <div className="first-block-wrapper row no-gutters">
                <div className="col-1"></div>
                <div className="col-3"></div>
                <div className="col-8 about-us-head-img">
                    <img src={AboutUsHeaderImage} alt=""></img>
                </div>

                <div className="header-info-wrapper">
                    <div className="orange-block-header"></div>
                    <div className="empty-block-in-header"></div>
                    <br />
                    <div className="hebron-black-header-title">ХЕВРОН</div>
                    <div className="hebron-red-header-title">
                        IT АКАДЕМІЯ - ЦЕ:
                    </div>
                    <br />
                    <div className="hebron-maininfo-header">
                        неприбуткова організація, заснована у 2016 році
                        подружжям Ігоря Були та Лілії Валігун. Після успішного
                        досвіду роботи в сфері ІТ в Сполучених Штатах Америки,
                        пара вирішила допомагати соціально незахищеній молоді в
                        Україні. Через труднощі, пов'язані з роботою з молоддю
                        соціально кризової категорії, було визначено що цей
                        проект є християнським. Це сприяє не лише формуванню
                        якісного освітнього середовища, але також об'єднює
                        студентів Хеврон ІТ Академії в здорову активну
                        спільноту, яка в подальшому вже дбає і допомагає
                        наступним студентам, які прийдуть після них.
                    </div>
                </div>
                <span className="about-us-header-title">
                    <b>ПРО НАС</b>
                </span>
            </div>
            <div className="second-block-wrapper row no-gutters">
                <div className="grey-subblock col-12"></div>
                <div className="second-block-info-wrapper col-12">
                    <div className="empty-space-in-second-info-block"></div>
                    <div className="statut">СТАТУТ</div>
                    <div className="statut-item-wrapper">
                        <div className="statut-item">
                            <div className="number-and-title">
                                <div className="header-number-wrapper">
                                    <div className="number">01</div>
                                    <div className="header-rectangle"></div>
                                </div>
                                <div className="header-title">МІСІЯ</div>
                            </div>

                            <div className="header-logo">
                                <MissionLogo className="header-logo-svg" />
                            </div>
                            <div className="header-text">788888588</div>
                        </div>
                    </div>
                    <div className="statut-item-wrapper">
                        <div className="statut-item">
                            <div className="number-and-title">
                                <div className="header-number-wrapper">
                                    <div className="number">02</div>
                                    <div className="header-rectangle"></div>
                                </div>
                                <div className="header-title">ЦІЛЬ</div>
                            </div>

                            <div className="header-logo">
                                <GoalLogo className="header-logo-svg" />
                            </div>

                            <div className="header-text">
                                Допомогти соціально незахищеній молоді
                                реалізуватися в суспільстві, шляхом виховання у
                                них моральних цінностей та здобуття професійної
                                кваліфікації в IT сфері, що допоможе їм у
                                майбутньому.
                            </div>
                        </div>
                    </div>
                    <div className="statut-item-wrapper">
                        <div className="statut-item">
                            <div className="number-and-title">
                                <div className="header-number-wrapper">
                                    <div className="number">03</div>
                                    <div className="header-rectangle"></div>
                                </div>
                                <div className="header-title">БАЧЕННЯ</div>
                            </div>

                            <div className="header-logo">
                                <VisionLogo className="header-logo-svg" />
                            </div>
                            <div className="header-text">788888588</div>
                        </div>
                    </div>
                    <div className="empty-space-in-second-info-block"></div>
                </div>
            </div>
            <div className="third-block-wrapper row no-gutters">
                <div className="col-2"></div>
                <div className="col-4 third-block-large-text">
                    <span>Знайомтесь з</span>
                    <span>командою Хеврону:</span>
                </div>
                <div className="col-4 third-block-smaller-text">
                    <span>
                        Хеврон ІТ Академія – це команда однодумців,
                        професіоналів та небайдужих людей. Нам подобається те,
                        що робимо, тому робимо це якісно. Ми відкриті,  любимо
                        технології, і використовуємо їх щоб розширювати межі та
                        втілювати найсміливіші ідеї. 
                    </span>
                </div>
                <div className="col-2"></div>
            </div>
            <HebronCommandInAboutUsPage data={hebronCommand} />
            {renderedGallery}
            <div className="title-block-for-about-us-page row no-gutters">
                Відгуки
            </div>
            <ReviewsForAboutUs data={dataForReviews} id={1} />
            <VideoBlock />
            <div className="title-block-for-about-us-page row no-gutters">
                Питання (FAQ)
            </div>
            {renderedFAQs}
            {isPopUp}
        </div>
    );
};

export default AboutUs;
